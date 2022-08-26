import { Checkbox, Form, Select as DefaultSelect } from 'antd'
import './select.multy.scss'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Multi = ({ options, placeholder, name }: SelectType) => {
  return (
    <Form.Item className="select-wrapper" name={name}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        menuItemSelectedIcon={<Checkbox checked />}
        mode="multiple"
        dropdownClassName="dropdown-wrapper"
        placeholder={placeholder}
      >
        {options.map((item) => (
          <DefaultSelect.Option value={item.value}>
            <div className="select-checkbox" />
            {item.label}
          </DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </Form.Item>
  )
}
