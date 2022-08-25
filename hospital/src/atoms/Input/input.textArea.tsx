import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.textArea.scss'
import cn from 'classnames'

export const TextArea = ({ value, onChange, label, name, className }: InputType) => {
  return (
    <Form.Item name={name} className={cn('text-field-wrapper', className)}>
      <Input.TextArea value={value} onChange={onChange} placeholder={label} rows={5} />
    </Form.Item>
  )
}
