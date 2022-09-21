import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './button.icon.scss'
import { ButtonType } from './ButtonType'

export const Icon = ({ disabled, children, onClick, className, htmlType }: ButtonType) => {
  return (
    <DefaultButton
      htmlType={htmlType}
      className={classNames('default-button', 'icon', className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  )
}
