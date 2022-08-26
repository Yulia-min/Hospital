import { FormInstance } from 'antd'

export type LoginFormType = {
  visible: boolean
  children: React.ReactNode
  title: string
  subtitle: string
  form: FormInstance
  onFinish: (values: any) => void
}
