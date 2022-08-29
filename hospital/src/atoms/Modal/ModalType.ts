import { ModalProps } from "antd"

export type ModalType = ModalProps & {
  children: React.ReactNode
  className?: string
}
