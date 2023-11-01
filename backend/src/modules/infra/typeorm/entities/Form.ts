import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm'

@Entity({ name: 'forms' })
export class Form {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ type: 'varchar' })
  name: string

  @Column({ unique: true, type: 'varchar' })
  cpf: string

  @Column({ type: 'varchar' })
  email: string

  @Column({ type: 'varchar' })
  color: string

  @Column({ type: 'varchar' })
  observation: string

  @CreateDateColumn()
  created_at: Date
}
