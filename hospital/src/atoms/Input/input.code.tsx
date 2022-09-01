import AuthCode from 'react-auth-code-input'
import { InputType } from './InputType'
import './input.code.scss'
import { Form } from 'antd'
import cn from 'classnames'
import { useState } from 'react'

export const Code = ({ propsItem, className }: InputType) => {
  const [, setResult] = useState('')
  const onChange = (res: string) => {
    setResult(res)
  }
  return (
    <Form.Item {...propsItem} className={cn('code-wrapper', className)}>
      <AuthCode onChange={onChange} allowedCharacters="numeric" />
    </Form.Item>
  )
}
