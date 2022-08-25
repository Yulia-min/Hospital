import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './Button.scss'
import { ButtonType } from './ButtonType'

export const Button = ({
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
      className={classNames(variant, className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </DefaultButton>
  )
}
