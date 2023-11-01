import React, { InputHTMLAttributes } from 'react'
import { Input as CustomInput, InputContainer } from './Input.styles'
import { IconBaseProps } from 'react-icons'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ComponentType<IconBaseProps>
  iconFunction?: () => void
}

export function Input({ icon: Icon, iconFunction, ...rest }: InputProps) {
  return (
    <InputContainer>
      <CustomInput {...rest} />
      {Icon && <Icon onClick={iconFunction} size={22} />}
    </InputContainer>
  )
}
