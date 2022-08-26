import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.textArea.scss'
import cn from 'classnames'

export const TextArea = ({ propsItem, className }: InputType) => {
  return (
    <Form.Item {...propsItem} className={cn('text-field-wrapper', className)}>
      <Input.TextArea rows={5} />
    </Form.Item>
  )
}
