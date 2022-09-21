import { Form, Select as DefaultSelect } from 'antd'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'
import cn from 'classnames'

export const Single = ({ propsItem, propsSelect, className }: SelectType) => {
  return (
    <Form.Item className={cn('select-wrapper', className)} {...propsItem}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        {...propsSelect}
        dropdownClassName="dropdown-wrapper"
      />
    </Form.Item>
  )
}
