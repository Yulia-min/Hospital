import { FormInstance } from 'antd'

export type LoginFormType = {
  visible: boolean
  children: React.ReactNode
  firstTitle: string
  secondTitle: string
  form: FormInstance
  onFinish: (values: any) => void
}
