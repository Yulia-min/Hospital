import { ModalType } from './ModalType'
import { Modal as DefaultModal } from 'antd'

export const Modal = ({ visible, children }: ModalType) => {
  return (
    <DefaultModal visible={visible} footer={null}>
      {children}
    </DefaultModal>
  )
}
