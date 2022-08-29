import { Checkbox, Form, Select as DefaultSelect } from 'antd'
import './select.multy.scss'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Multi = ({ propsSelect, propsItem, options, onChange }: SelectType) => {
  return (
    <Form.Item className="select-wrapper" {...propsItem}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        {...propsSelect}
        showSearch={false}
        menuItemSelectedIcon={<Checkbox checked />}
        mode="multiple"
        onChange={onChange}
        dropdownClassName="dropdown-wrapper"
      >
        {options?.map((item, index) => (
          <DefaultSelect.Option value={item.name} key={index}>
            <div className="select-checkbox" />
            {item.name}
          </DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </Form.Item>
  )
}
