import { Checkbox, Select as DefaultSelect } from 'antd'
import './select.multy.scss'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Multi = ({ onChange, options, placeholder }: SelectType) => {
  return (
    <div className="select-wrapper">
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        menuItemSelectedIcon={<Checkbox checked />}
        className="select-default"
        mode="multiple"
        placeholder={placeholder}
        onChange={onChange}
      >
        {options.map((item) => (
          <DefaultSelect.Option value={item.value}>
            <div className="select-checkbox" />
            {item.label}
          </DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </div>
  )
}
