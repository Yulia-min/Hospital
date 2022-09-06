import { ModalType } from './ModalType'
import { Modal as DefaultModal } from 'antd'

export const Modal = ({ visible, children, className, onCancel }: ModalType) => {
  return (
    <DefaultModal className={className} onCancel={onCancel} visible={visible} footer={null}>
      {children}
    </DefaultModal>
  )
}
