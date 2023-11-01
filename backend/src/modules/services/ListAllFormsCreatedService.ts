import { Form } from '../infra/typeorm/entities/Form'
import { IFormRepository } from '../repositories/IFormRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class ListAllFormsCreatedService {
  constructor(
    @inject('FormRepository')
    private formRepository: IFormRepository,
  ) {}

  async execute(): Promise<Form[]> {
    const forms = await this.formRepository.getAll()

    return forms
  }
}
