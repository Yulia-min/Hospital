import { Form, Select as DefaultSelect } from 'antd'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Single = ({ propsItem, propsSelect, onChange }: SelectType) => {
  return (
    <Form.Item className="select-wrapper" {...propsItem}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        {...propsSelect}
        dropdownClassName="dropdown-wrapper"
        onChange={onChange}
      />
    </Form.Item>
  )
}
