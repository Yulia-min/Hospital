import { ButtonProps } from 'antd'

export type ButtonType = ButtonProps & {
  variant: 'primary' | 'secondary' | 'text'
  onClick?: () => void
  children: React.ReactNode
}
