import { ButtonProps } from 'antd'

export type ButtonType = {
  propsButton?: ButtonProps
  variant: 'primary' | 'secondary' | 'text'
  children: React.ReactNode
  className?: string
}
