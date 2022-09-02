import { Checkbox as DefaultCheckbox, Form } from 'antd'
import { CheckboxType } from './ChecboxType'
import cn from 'classnames'
import './Checkbox.scss'

export const Single = ({ propsItem, className, propsChecbox, children }: CheckboxType) => {
  return (
    <Form.Item {...propsItem} className={cn('checkbox-wrapper', className)}>
      <DefaultCheckbox {...propsChecbox}>{children}</DefaultCheckbox>
    </Form.Item>
  )
}
