import 'reflect-metadata'
import './container'
import { config } from 'dotenv'
import { fastify } from 'fastify'
import swagger from '@fastify/swagger'
import swaggerUi from '@fastify/swagger-ui'
import cors from '@fastify/cors'
import { mainRouter } from '../../../modules/infra/http/routes/main.routes'

config()

const app = fastify({
  trustProxy: true,
  logger:
    process.env.NODE_ENV === 'dev'
      ? {
          transport: {
            target: 'pino-pretty',
            options: {
              translateTime: 'dd/mm HH:MM:ss Z',
              ignore: 'pid,hostname',
            },
          },
        }
      : true,
})

app.register(swagger, {
  swagger: {
    info: {
      title: 'Desafio técnico ETEG',
      version: '1.0.0',
      contact: {
        email: 'leosouza.coelh13@gmail.com',
        name: 'Leonardo Coelho',
      },
      description: 'Criação de formualrio',
    },
    host: 'localhost:3333',
  },
})

app.register(swaggerUi, {
  routePrefix: '/documentation',
  staticCSP: true,
})

app.register(cors, { origin: [process.env.ORIGIN_URL] })

app.register(mainRouter, { prefix: '/form' })

export { app }
