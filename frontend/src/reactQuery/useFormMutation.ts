import { useMutation } from 'react-query'
import { IForms } from '../pages/Form/Form'
import api from '../services/api'


export function useFormMutation() {
  const useForm = async (params: IForms) => {
    const resp = await api.post('/form', {
      ...params,
    })

    return resp.data
  }

  return useMutation(['useForm'], useForm)
}

 
