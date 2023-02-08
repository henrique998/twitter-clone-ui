import { ComponentProps, ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps extends ComponentProps<typeof ButtonContainer> {
  variant?: 'big' | 'small'
  children: ReactNode
}

export function Button({ variant = 'big', children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
