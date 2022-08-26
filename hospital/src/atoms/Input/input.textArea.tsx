import { Form, Input } from 'antd'
import { InputType } from './InputType'
import './input.textArea.scss'
import cn from 'classnames'

export const TextArea = ({ propsTextArea, propsItem, className, row }: InputType) => {
  return (
    <Form.Item {...propsItem} className={cn('text-field-wrapper', className)}>
      <Input.TextArea {...propsTextArea} rows={row} />
    </Form.Item>
  )
}
