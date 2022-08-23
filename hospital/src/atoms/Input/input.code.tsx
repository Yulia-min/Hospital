import AuthCode from 'react-auth-code-input'
import { InputType } from './InputType'
import './input.code.scss'
import { Form } from 'antd'

export const Code = ({ onChange, name, className }: InputType) => {
  return (
    <Form.Item name={name} className={className}>
      <AuthCode inputClassName="code-input" allowedCharacters="numeric" onChange={onChange} />
    </Form.Item>
  )
}
