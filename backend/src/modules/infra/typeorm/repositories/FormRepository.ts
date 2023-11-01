import { dataSource } from '../../../../shared/infra/typeorm/data_source/dataSource'
import { ICreateFormsDTO } from '../../../dto/ICreateFormsDTO'
import { IFormRepository } from '../../../repositories/IFormRepository'
import { Form } from '../entities/Form'
import { Repository } from 'typeorm'

export class FormRepository implements IFormRepository {
  private ormRepository: Repository<Form>

  constructor() {
    this.ormRepository = dataSource.getRepository(Form)
  }

  async getAll(): Promise<Form[]> {
    return this.ormRepository.find()
  }

  async create(form: ICreateFormsDTO): Promise<Form> {
    const newForm = this.ormRepository.create(form)

    await this.ormRepository.save(newForm)

    return newForm
  }

  async findByCpf(cpf: string): Promise<Form> {
    return this.ormRepository.findOne({ where: { cpf } })
  }
}
