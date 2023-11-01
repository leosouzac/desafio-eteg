import { Form } from '../../infra/typeorm/entities/Form'
import { FormRepository } from '../../infra/typeorm/repositories/FormRepository'
import { CreateNewFromsService } from '../../services/CreateNewFromsService'
import { AppError } from '../../../shared/errors/AppError'
import { v4 } from 'uuid'
jest.mock('../../infra/typeorm/repositories/FormRepository')
const formRepositoryMock = FormRepository as jest.MockedClass<
  typeof FormRepository
>

describe('Create new car service test', () => {
  let createNewFromsService: CreateNewFromsService

  beforeEach(async () => {
    const formRepository = new FormRepository()

    formRepositoryMock.mockClear()

    createNewFromsService = new CreateNewFromsService(formRepository)
  })

  it('should be able to create a form', async () => {
    const form = new Form()
    form.id = v4()
    form.color = 'Vermelho'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    formRepositoryMock.prototype.create.mockResolvedValue(form)
    formRepositoryMock.prototype.findByCpf.mockResolvedValue(null)

    const newForm = await createNewFromsService.execute(form)
    expect(newForm).toHaveProperty('id')
    expect(newForm.cpf).toEqual(form.cpf)
  })

  it('should not be able to create a form with same cpf', async () => {
    const form = new Form()

    form.color = 'Vermelho'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    const existingForm = new Form()

    existingForm.color = 'Roxo'
    existingForm.cpf = '000.000.000-00'
    existingForm.email = 'teste2@test.com'
    existingForm.name = 'Eteg2'
    existingForm.observation = 'Isso é um teste'

    formRepositoryMock.prototype.findByCpf.mockResolvedValue(existingForm)

    await expect(createNewFromsService.execute(form)).rejects.toEqual(
      new AppError(400, 'Cpf já cadastrado'),
    )
  })

  it('should not be able to create a form if color is not in rainbow', async () => {
    const form = new Form()

    form.color = 'Preto'
    form.cpf = '000.000.000-00'
    form.email = 'teste@test.com'
    form.name = 'Eteg'
    form.observation = 'Isso é um teste'

    formRepositoryMock.prototype.findByCpf.mockResolvedValue(null)

    await expect(createNewFromsService.execute(form)).rejects.toEqual(
      new AppError(400, 'Cor invalida! Digite uma cor presente no arco íris'),
    )
  })
})
