import { ButtonProps } from 'antd'

export type ButtonType = ButtonProps & {
  variant: 'primary' | 'secondary' | 'text'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
  htmlType?: 'button' | 'submit' | 'reset' | undefined
}
