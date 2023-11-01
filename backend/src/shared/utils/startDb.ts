import { dataSource } from 'shared/infra/typeorm/data_source/dataSource'

import { config } from 'dotenv'

config()

export async function startDb(): Promise<void> {
  await dataSource.initialize()
}
