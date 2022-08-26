import { Form, Select as DefaultSelect } from 'antd'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Single = ({ options, placeholder, name }: SelectType) => {
  return (
    <Form.Item className="select-wrapper" name={name}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        placeholder={placeholder}
        dropdownClassName="dropdown-wrapper"
      >
        {options.map((item) => (
          <DefaultSelect.Option value={item.value}>{item.label}</DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </Form.Item>
  )
}
