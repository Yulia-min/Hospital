import AuthCode from 'react-auth-code-input'
import { InputType } from './InputType'
import './input.code.scss'
import { Form } from 'antd'
import cn from 'classnames'

export const Code = ({ name, className }: InputType) => {
  return (
    <Form.Item name={name} className={cn('code-wrapper', className)}>
      <AuthCode allowedCharacters="numeric" />
    </Form.Item>
  )
}
