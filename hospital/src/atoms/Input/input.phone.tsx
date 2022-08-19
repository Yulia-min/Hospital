import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { InputType } from './InputType'

export const Phone = ({ value, onChange }: InputType) => {
  return (
    <PhoneInput country={'us'} value={value} onChange={onChange} placeholder="(XXX) XXX-XXXX" />
  )
}
