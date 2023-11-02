import { Form } from '../../../modules/infra/typeorm/entities/Form'
import { v4 } from 'uuid'
import { ListAllFormsCreatedService } from '../../../modules/services/ListAllFormsCreatedService'
import { CreateNewFromsService } from '../../../modules/services/CreateNewFromsService'
import { app } from '../../../shared/infra/http/app'

jest.mock('../../../modules/services/ListAllFormsCreatedService')
const listAllFormsCreatedServiceMock =
  ListAllFormsCreatedService as jest.MockedClass<
    typeof ListAllFormsCreatedService
  >

jest.mock('../../../modules/services/CreateNewFromsService')
const createNewFromsServiceMock = CreateNewFromsService as jest.MockedClass<
  typeof CreateNewFromsService
>

describe('Main routes test', () => {
  beforeEach(async () => {
    createNewFromsServiceMock.mockClear()
    listAllFormsCreatedServiceMock.mockClear()
  })
  beforeAll(async () => {
    await app.ready()
  })

  afterAll(async () => {
    await app.close()
  })

  it('should be able to create a form', async () => {
    const form = new Form()
    form.id = v4()
    form.color = 'Vermelho'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    createNewFromsServiceMock.prototype.execute.mockResolvedValue(form)

    const res = await app.inject({
      method: 'POST',
      url: '/form',
      payload: {
        name: form.name,
        cpf: form.cpf,
        email: form.email,
        color: form.color,
        observation: form.observation,
      },
    })

    expect(res.statusCode).toEqual(201)
  })

  it('should be able to list all form', async () => {
    const form = new Form()
    form.id = v4()
    form.color = 'Vermelho'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    listAllFormsCreatedServiceMock.prototype.execute.mockResolvedValue([form])

    const res = await app.inject({
      method: 'GET',
      url: '/form/list-forms',
    })

    expect(res.json()).toEqual([form])
  })
})
