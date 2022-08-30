import { Checkbox as DefaultCheckbox, Form } from 'antd'
import { CheckboxType } from './ChecboxType'
import cn from 'classnames'
import './Checkbox.scss'

export const Checkbox = ({ propsGroupCheckbox, propsItem, className }: CheckboxType) => {
  return (
    <Form.Item {...propsItem} className={cn('checkbox-wrapper', className)} >
      <DefaultCheckbox.Group {...propsGroupCheckbox} />
    </Form.Item>
  )
}
