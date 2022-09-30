import classNames from 'classnames'
import './Radio.scss'
import { Radio as DefaultRadio } from 'antd'
import { RadioType } from './RadioType'
import { Form } from 'antd'

export const Radio = ({ propsItem, propsRadio, className }: RadioType) => {
  return (
    <Form.Item {...propsItem} className={classNames('radio', className)}>
      <DefaultRadio.Group {...propsRadio} />
    </Form.Item>
  )
}
