import { Form } from '../../infra/typeorm/entities/Form'
import { FormRepository } from '../../infra/typeorm/repositories/FormRepository'
import { v4 } from 'uuid'
import { ListAllFormsCreatedService } from '../../../modules/services/ListAllFormsCreatedService'

jest.mock('../../infra/typeorm/repositories/FormRepository')
const formRepositoryMock = FormRepository as jest.MockedClass<
  typeof FormRepository
>

describe('List all created forms service test', () => {
  let listAllFormsCreatedService: ListAllFormsCreatedService

  beforeEach(async () => {
    const formRepository = new FormRepository()

    formRepositoryMock.mockClear()

    listAllFormsCreatedService = new ListAllFormsCreatedService(formRepository)
  })

  it('should be able to list all forms', async () => {
    const form = new Form()
    form.id = v4()
    form.color = 'Vermelho'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    formRepositoryMock.prototype.getAll.mockResolvedValue([form])

    const newForm = await listAllFormsCreatedService.execute()
    expect(newForm[0]).toHaveProperty('id')
    expect(newForm).toHaveLength(1)
  })
})
