import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.default.scss'

export const Default = ({ value, onChange, label, name }: InputType) => {
  return (
    <Form.Item name={name}>
      <Input
        value={value}
        onChange={onChange}
        id="field"
        className="default-input"
        placeholder=" "
      />
      <label htmlFor="field" className="placeholder">
        {label}
      </label>
    </Form.Item>
  )
}
