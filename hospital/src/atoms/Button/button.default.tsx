import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './button.default.scss'
import { ButtonType } from './ButtonType'

export const Default = ({
  variant,
  disabled,
  children,
  onClick,
  className,
  htmlType
}: ButtonType) => {
  return (
    <DefaultButton
      htmlType={htmlType}
      className={classNames('default-button', variant, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  )
}
