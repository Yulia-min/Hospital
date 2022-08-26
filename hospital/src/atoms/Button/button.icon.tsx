import classNames from 'classnames'
import { Button as DefaultButton } from 'antd'
import './button.icon.scss'
import { ButtonType } from './ButtonType'

export const Icon = ({ propsButton, children, className }: ButtonType) => {
  return (
    <DefaultButton {...propsButton} className={classNames('default-button', 'icon', className)}>
      {children}
    </DefaultButton>
  )
}
