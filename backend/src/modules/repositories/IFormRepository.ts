import { ICreateFormsDTO } from '../dto/ICreateFormsDTO'
import { Form } from '../infra/typeorm/entities/Form'

export interface IFormRepository {
  create(form: ICreateFormsDTO): Promise<Form>
  findByCpf(cpf: string): Promise<Form | null>
  getAll(): Promise<Form[]>
}
