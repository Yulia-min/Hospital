export type ButtonType = {
  variant: 'primary' | 'secondary' | 'text'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
  htmlType?: 'button' | 'submit' | 'reset' | undefined
}
