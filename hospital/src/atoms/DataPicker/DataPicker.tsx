import classNames from 'classnames'
import { DatePicker as DefaultDataPicker, Form } from 'antd'
import { ReactComponent as Calendar } from 'src/public/Calendar.svg'
import './DataPicker.scss'
import { DataPickerType } from './DataPickerType'

export const DataPicker = ({
  propsItem,
  className,
  propsDataPicker,
  dropdownClassName
}: DataPickerType) => {
  return (
    <Form.Item
      colon={false}
      {...propsItem}
      className={classNames('data-picker-wrapper', className)}
    >
      <DefaultDataPicker
        suffixIcon={<Calendar />}
        allowClear={false}
        dropdownClassName={classNames('popup', dropdownClassName)}
        superPrevIcon={false}
        superNextIcon={false}
        {...propsDataPicker}
        format="DD/MM/YYYY"
      />
    </Form.Item>
  )
}
