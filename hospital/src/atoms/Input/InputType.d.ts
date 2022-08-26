import { FormItemProps, InputProps } from 'antd'
import { TextAreaProps } from 'antd/lib/input'

export type InputType = {
  propsItem?: FormItemProps
  propsInput?: InputProps
  propsTextArea?: TextAreaProps
  className?: string
  row?: number
}
