import { ModalType } from './ModalType'
import { Modal as DefaultModal } from 'antd'

export const Modal = ({ visible, children, className }: ModalType) => {
  return (
    <DefaultModal className={className} visible={visible} footer={null}>
      {children}
    </DefaultModal>
  )
}
