import { Form, Select as DefaultSelect } from 'antd'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Single = ({ options, propsItem, propsSelect }: SelectType) => {
  return (
    <Form.Item className="select-wrapper" {...propsItem}>
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        {...propsSelect}
        dropdownClassName="dropdown-wrapper"
      >
        {options?.map((item) => (
          <DefaultSelect.Option value={item.value}>{item.label}</DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </Form.Item>
  )
}
