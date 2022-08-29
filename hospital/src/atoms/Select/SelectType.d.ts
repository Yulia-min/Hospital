import { FormItemProps, SelectProps } from 'antd'

export type SelectType = {
  propsItem?: FormItemProps
  propsSelect?: SelectProps
  onChange?: (value: strig) => void
}
