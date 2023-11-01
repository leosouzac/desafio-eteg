import { FastifyInstance } from 'fastify'
import { createNewFormsHandler } from '../handlers/createNewFormsHandler'
import {
  CreateNewFormBodyType,
  createNewFormSchema,
} from '../schemas/createNewFormSchema'
import { listAllFormCreatedHandler } from '../handlers/listAllFormCreatedHandler'

export async function mainRouter(app: FastifyInstance): Promise<void> {
  app.post<{ Body: CreateNewFormBodyType }>(
    '/',
    {
      schema: { summary: 'Create new form', body: createNewFormSchema },
    },
    createNewFormsHandler,
  )

  app.get(
    '/list-forms',
    {
      schema: { summary: 'List all created forms' },
    },
    listAllFormCreatedHandler,
  )
}
