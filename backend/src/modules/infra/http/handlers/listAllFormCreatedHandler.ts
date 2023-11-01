import { FastifyReply } from 'fastify'
import { container } from 'tsyringe'
import { ListAllFormsCreatedService } from '../../../services/ListAllFormsCreatedService'

export async function listAllFormCreatedHandler(
  request,
  reply: FastifyReply,
): Promise<void> {
  const listAllFormsCreatedService = container.resolve(
    ListAllFormsCreatedService,
  )

  const forms = await listAllFormsCreatedService.execute()

  reply.status(201).send(forms)
}
