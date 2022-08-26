import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { InputType } from './InputType'
import './input.phone.scss'
import { Form } from 'antd'
import cn from 'classnames'

export const Phone = ({ propsItem, className }: InputType) => {
  return (
    <Form.Item className={cn('phone-wrapper', className)} {...propsItem}>
      <PhoneInput
        country={'us'}
        inputProps={{
          name: 'phone',
          required: true,
          autoFocus: true
        }}
        placeholder="(XXX) XXX-XXXX"
      />
    </Form.Item>
  )
}
