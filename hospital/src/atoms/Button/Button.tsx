import './Button.scss'
import { ButtonType } from './ButtonType'

export const Button = ({ variant, disabled, children, onClick }: ButtonType) => {
  return (
    <button className={variant} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
