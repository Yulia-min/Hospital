import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { InputType } from './InputType'
import './input.phone.scss'
import { Form } from 'antd'

export const Phone = ({ value, onChange, name }: InputType) => {
  return (
    <div className="phone-wrapper">
      <Form.Item name={name}>
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
      </Form.Item>
    </div>
  )
}
