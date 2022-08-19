import { Checkbox, Select as DefaultSelect } from 'antd'
import './Select.scss'
import { ReactComponent as SelectArrow } from 'src/public/selectArrow.svg'
import { SelectType } from './SelectType'

export const Select = ({ multiple, onChange, options, placeholder }: SelectType) => {
  return (
    <DefaultSelect
      suffixIcon={<SelectArrow />}
      showArrow
      showSearch={false}
      menuItemSelectedIcon={!!multiple && <Checkbox checked />}
      className="hospital-select"
      mode={multiple}
      placeholder={placeholder}
      onChange={onChange}
    >
      {!!multiple ? (
        <>
          {options.map((item) => (
            <>
              <DefaultSelect.Option value={item.value}>
                <div className="select-checkbox" />
                {item.label}
              </DefaultSelect.Option>
            </>
          ))}
        </>
      ) : (
        <>
          {options.map((item) => (
            <DefaultSelect.Option value={item.value}>{item.label}</DefaultSelect.Option>
          ))}
        </>
      )}
    </DefaultSelect>
  )
}
