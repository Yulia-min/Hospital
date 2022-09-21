import { Checkbox, Form, Select as DefaultSelect } from 'antd'
import './select.multy.scss'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'
import cn from 'classnames'

export const Multi = ({ propsSelect, propsItem, className }: SelectType) => {
  return (
    <Form.Item className={cn('select-wrapper', className)} {...propsItem}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        {...propsSelect}
        showSearch={false}
        menuItemSelectedIcon={<Checkbox checked />}
        mode="multiple"
        dropdownClassName="dropdown-wrapper"
      />
    </Form.Item>
  )
}
