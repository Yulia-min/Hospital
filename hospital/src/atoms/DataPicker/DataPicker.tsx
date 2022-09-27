import classNames from 'classnames'
import { DatePicker as DefaultDataPicker, Form } from 'antd'
import { ReactComponent as Calendar } from 'src/public/Calendar.svg'
import './DataPicker.scss'
import { DataPickerType } from './DataPickerType'
import moment from 'moment'

export const DataPicker = ({ propsItem, className, propsDataPicker }: DataPickerType) => {
  const disabledDateHandler = (current: moment.Moment) => {
    const customDate = moment().format('DD/MM/YYYY')
    return current && current < moment(customDate, 'DD/MM/YYYY')
  }
  return (
    <Form.Item
      colon={false}
      {...propsItem}
      className={classNames('data-picker-wrapper', className)}
    >
      <DefaultDataPicker
        suffixIcon={<Calendar />}
        allowClear={false}
        dropdownClassName="popup"
        disabledDate={disabledDateHandler}
        superPrevIcon={false}
        superNextIcon={false}
        {...propsDataPicker}
        format="DD/MM/YYYY"
      />
    </Form.Item>
  )
}
