import { config } from 'dotenv'
import { app } from './shared/infra/http/app'
import { startDb } from 'shared/utils/startDb'

config()

startDb().then(() => {
  app.listen({ port: Number(process.env.PORT), host: '0.0.0.0' })
})
