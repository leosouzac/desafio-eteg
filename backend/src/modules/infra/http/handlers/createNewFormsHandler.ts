import { FastifyReply, FastifyRequest } from 'fastify'
import { container } from 'tsyringe'
import { CreateNewFromsService } from '../../../services/CreateNewFromsService'
import { CreateNewFormBodyType } from '../schemas/createNewFormSchema'

export interface IRequest extends FastifyRequest {
  body: CreateNewFormBodyType
}

export async function createNewFormsHandler(
  request: IRequest,
  reply: FastifyReply,
): Promise<void> {
  const { name, cpf, email, color, observation } = request.body

  const createNewFromsService = container.resolve(CreateNewFromsService)

  await createNewFromsService.execute({
    name,
    cpf,
    email,
    color,
    observation,
  })

  reply.status(201).send()
}
