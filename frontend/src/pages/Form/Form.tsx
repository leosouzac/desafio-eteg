import {
  Container,
  ContentContainer,
  FormContainer,
  Title,
  TitleContainer,
} from './Form.styles'
import { Input } from '../../components/Input/Input'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useFormMutation } from '../../reactQuery/useFormMutation'

export interface IForms {
  name: string
  cpf: string
  email: string
  color: string
  observation: string
}


export function Form() {
  const { mutateAsync } = useFormMutation()

  const [form, setForm] = useState<IForms>({
    color: '',
    cpf: '',
    email: '',
    name: '', 
    observation: ''
  } as IForms)

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()

      try {
        await mutateAsync({
         ...form
        })

        
        setForm({
          color: '',
          cpf: '',
          email: '',
          name: '', 
          observation: ''
        })

        alert('Formulario enviado com sucesso!')
      } catch (error) {
        

        setForm({
          color: '',
          cpf: '',
          email: '',
          name: '', 
          observation: ''
        })

        alert(
          error.response.data.message,
        )

      }
    },
    [form, mutateAsync],
  )


  return (
    <Container>
      <ContentContainer>
        
          <TitleContainer>
            <Title>
              <span style={{ color: '#4169E1' }}>Preencha o formulário</span>
            </Title>
          </TitleContainer>
      

        <FormContainer>
          <form onSubmit={handleSubmit}>
            <Input
              name="name"
              placeholder="Nome"
              value={form.name || ''}
              onChange={handleInputChange}
              
            />
            <Input
              name="cpf"
              placeholder="CPF"
              value={form.cpf || ''}
              onChange={handleInputChange}

              
            />
            <Input
              name="email"
              placeholder="E-mail"
              value={form.email || ''}
              onChange={handleInputChange}
              
              
            />
            <Input
              name="color"
              placeholder="Cor favorita"
              value={form.color || ''}
              onChange={handleInputChange}

              
            />
            <Input
              name="observation"
              placeholder="Observação"
              value={form.observation || ''}
              onChange={handleInputChange}

              
            />

            <button type="submit">Enviar</button>

          </form>
        </FormContainer>
      </ContentContainer>
    </Container>
  )
}
