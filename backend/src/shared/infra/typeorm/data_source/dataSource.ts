import { DataSource } from 'typeorm'
import { config } from 'dotenv'

config()

export const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRESQL_HOST,
  port: 5432,
  username: process.env.POSTGRESQL_USER,
  password: process.env.POSTGRESQL_PASSWORD,
  database:
    process.env.NODE_ENV === 'test'
      ? 'eteg_test'
      : process.env.POSTGRESQL_DATABASE,
  synchronize: true,
  logging: false,
  migrationsTableName: 'migration',
  entities:
    process.env.NODE_ENV === 'prod'
      ? [
          'dist/modules/**/infra/typeorm/entities/*.js',
          'dist/shared/infra/typeorm/entities/*.js',
        ]
      : [
          'src/modules/**/infra/typeorm/entities/*.ts',
          'src/shared/infra/typeorm/entities/*.ts',
        ],
  migrations:
    process.env.NODE_ENV === 'prod'
      ? ['dist/shared/infra/typeorm/migrations/*.js']
      : ['src/shared/infra/typeorm/migrations/*.ts'],
})
