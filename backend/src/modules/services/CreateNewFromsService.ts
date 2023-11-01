import { AppError } from '../../shared/errors/AppError'
import { ICreateFormsDTO } from '../dto/ICreateFormsDTO'
import { Form } from '../infra/typeorm/entities/Form'
import { IFormRepository } from '../repositories/IFormRepository'
import { inject, injectable } from 'tsyringe'

const validColors = [
  'vermelho',
  'laranja',
  'amarelo',
  'verde',
  'azul',
  'anil',
  'violeta',
]

@injectable()
export class CreateNewFromsService {
  constructor(
    @inject('FormRepository')
    private formRepository: IFormRepository,
  ) {}

  async execute(forms: ICreateFormsDTO): Promise<Form> {
    const foundExistingForm = await this.formRepository.findByCpf(forms.cpf)

    if (foundExistingForm) {
      throw new AppError(400, 'Cpf já cadastrado')
    }

    if (!validColors.includes(forms.color.toLowerCase())) {
      throw new AppError(
        400,
        'Cor invalida! Digite uma cor presente no arco íris',
      )
    }

    const newForm = await this.formRepository.create(forms)
    return newForm
  }
}
