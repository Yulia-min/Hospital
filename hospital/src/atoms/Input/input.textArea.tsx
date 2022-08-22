import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.textArea.scss'

export const TextArea = ({ value, onChange, label, name }: InputType) => {
  return (
    <Form.Item name={name}>
      <Input.TextArea
        value={value}
        onChange={onChange}
        className="text-field-input"
        placeholder={label}
        rows={5}
      />
    </Form.Item>
  )
}
