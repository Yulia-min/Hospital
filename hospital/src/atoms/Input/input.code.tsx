import AuthCode from 'react-auth-code-input'
import { InputType } from './InputType'
import './input.code.scss'
import { Form } from 'antd'

export const Code = ({ onChange, name }: InputType) => {
  return (
    <Form.Item name={name}>
      <AuthCode inputClassName="code-input" allowedCharacters="numeric" onChange={onChange} />
    </Form.Item>
  )
}
