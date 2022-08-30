import { CheckboxProps, FormItemProps } from 'antd'
import { CheckboxGroupProps } from 'antd/lib/checkbox'
import { ReactNode } from 'react'

export type CheckboxType = {
  propsItem?: FormItemProps
  propsChecbox?: CheckboxProps
  propsGroupCheckbox?: CheckboxGroupProps
  children?: ReactNode
  className?: string
}
