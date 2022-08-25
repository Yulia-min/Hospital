import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.default.scss'

export const Default = ({ value, onChange, label, name }: InputType) => {
  return (
    <Form.Item name={name} className="input-wrapper">
      <Input
        value={value}
        onChange={onChange}
        placeholder="."
        suffix={
          <label className="floating-label" htmlFor="name">
            {label}
          </label>
        }
      />
    </Form.Item>
  )
}
