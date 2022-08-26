import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './button.default.scss'
import { ButtonType } from './ButtonType'

export const Default = ({ propsButton, variant, children, className }: ButtonType) => {
  return (
    <DefaultButton className={classNames('default-button', variant, className)} {...propsButton}>
      {children}
    </DefaultButton>
  )
}
