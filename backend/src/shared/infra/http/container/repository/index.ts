import { FormRepository } from 'modules/infra/typeorm/repositories/FormRepository'
import { IFormRepository } from 'modules/repositories/IFormRepository'
import { container } from 'tsyringe'

container.registerSingleton<IFormRepository>('FormRepository', FormRepository)
