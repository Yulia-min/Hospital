export type ButtonType = {
  variant: 'primary' | 'secondary' | 'text' | 'icon'
  disabled?: boolean
  onClick?: () => void
  children: React.ReactNode
  className?: string
}
