import { Select as DefaultSelect } from 'antd'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Single = ({ onChange, options, placeholder }: SelectType) => {
  return (
    <div className="select-wrapper">
      <DefaultSelect
        suffixIcon={<SelectArrow />}
        showArrow
        showSearch={false}
        className="select-default"
        placeholder={placeholder}
        onChange={onChange}
      >
        {options.map((item) => (
          <DefaultSelect.Option value={item.value}>{item.label}</DefaultSelect.Option>
        ))}
      </DefaultSelect>
    </div>
  )
}
