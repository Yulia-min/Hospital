import { ButtonProps } from 'antd'

export type ButtonType = ButtonProps & {
  variant?: 'primary' | 'secondary' | 'text'
  disabled?: boolean
  onClick?: React.MouseEventHandler<HTMLElement>
  children: React.ReactNode
  className?: string
  htmlType?: 'button' | 'submit' | 'reset' | undefined
}
