import classNames from 'classnames'
import './Button.scss'
import { ButtonType } from './ButtonType'

export const Button = ({ variant, disabled, children, onClick, className}: ButtonType) => {
  return (
    <button className={classNames(variant, className)} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
