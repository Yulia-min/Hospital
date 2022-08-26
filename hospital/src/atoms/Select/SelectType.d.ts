import { FormItemProps, SelectProps } from 'antd'

export type SelectType = {
  propsItem?: FormItemProps
  propsSelect?: SelectProps
  options: { value: string; label: string }[]
}
