import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './button.default.scss'
import { ButtonType } from './ButtonType'

export const Icon = ({ disabled, children, onClick, className }: ButtonType) => {
  return (
    <DefaultButton
      className={classNames('default-button', 'icon', className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  )
}
