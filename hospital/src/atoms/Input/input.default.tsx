import { Input } from 'antd'
import { InputType } from './InputType'

export const Default = ({ value, onChange, label }: InputType) => {
  return (
    <div className="input-wrapper">
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
    </div>
  )
}
