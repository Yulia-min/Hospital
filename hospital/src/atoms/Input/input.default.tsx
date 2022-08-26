import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.default.scss'
import classNames from 'classnames'

export const Default = ({ propsItem, className }: InputType) => {
  return (
    <Form.Item {...propsItem} className={classNames('input-wrapper', className)}>
      <Input />
    </Form.Item>
  )
}
