import { Form } from 'antd'
import { Modal } from 'src/atoms'
import { Typography } from 'src/Typography'
import { LoginFormType } from './LoginFormType'
import './LoginForm.scss'

export const LoginForm = ({
  visible,
  firstTitle,
  secondTitle,
  form,
  onFinish,
  children
}: LoginFormType) => {
  return (
    <Modal visible={visible}>
      <Typography.Headline4 className="modal-title">{firstTitle}</Typography.Headline4>
      <Typography.Subtitle1 className="modal-description">{secondTitle}</Typography.Subtitle1>
      <div className="form-container">
        <Form form={form} onFinish={onFinish}>
          {children}
        </Form>
      </div>
    </Modal>
  )
}
