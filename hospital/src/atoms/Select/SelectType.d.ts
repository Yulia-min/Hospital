import { FormItemProps, SelectProps } from 'antd'

export type SelectType = {
  propsItem?: FormItemProps
  propsSelect?: SelectProps
  options?: { name: string }[]
  onChange?: (value: strig) => void
}
