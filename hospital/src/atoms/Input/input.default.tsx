import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.default.scss'
import classNames from 'classnames'

export const Default = ({ value, onChange, label, name, className }: InputType) => {
  return (
    <Form.Item name={name} label={label} className={classNames('input-wrapper', className)}>
      <Input value={value} onChange={onChange} />
    </Form.Item>
  )
}
