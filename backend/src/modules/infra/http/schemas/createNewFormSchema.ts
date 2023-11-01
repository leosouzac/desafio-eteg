import { Static, Type } from '@sinclair/typebox'

export const createNewFormSchema = Type.Composite([
  Type.Object({
    name: Type.String(),
    cpf: Type.String(),
    email: Type.String(),
    color: Type.String(),
    observation: Type.String(),
  }),
])

export type CreateNewFormBodyType = Static<typeof createNewFormSchema>
