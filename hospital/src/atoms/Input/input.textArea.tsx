import { Input } from 'antd'
import { InputType } from './InputType'

export const TextArea = ({ value, onChange, label }: InputType) => {
  return (
    <div className="text-field-wrapper">
      <Input.TextArea
        value={value}
        onChange={onChange}
        className="text-field-input"
        placeholder={label}
        rows={5}
      />
    </div>
  )
}
