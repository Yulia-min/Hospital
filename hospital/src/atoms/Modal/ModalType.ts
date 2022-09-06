import { ModalProps } from 'antd'

export type ModalType = ModalProps & {
  visible: boolean
  children: React.ReactNode
  className?: string
}
