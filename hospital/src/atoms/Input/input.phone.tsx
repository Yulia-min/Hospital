import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { InputType } from './InputType'

export const Phone = ({ value, onChange }: InputType) => {
  return (
    <PhoneInput
      country={'us'}
      inputProps={{
        name: 'phone',
        required: true,
        autoFocus: true
      }}
      value={value}
      onChange={onChange}
      placeholder="(XXX) XXX-XXXX"
    />
  )
}
