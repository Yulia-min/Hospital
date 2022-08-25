import { Form } from 'antd'
import { Modal } from 'src/atoms'
import { Typography } from 'src/Typography'
import { LoginFormType } from './LoginFormType'
import './LoginForm.scss'

export const LoginForm = ({
  visible,
  title,
  subtitle,
  form,
  onFinish,
  children
}: LoginFormType) => {
  return (
    <Modal visible={visible} className="modal">
      <Typography.Headline4 className="modal-title">{title}</Typography.Headline4>
      <Typography.Subtitle1 className="modal-description">{subtitle}</Typography.Subtitle1>
      <Form className="modal-form" form={form} onFinish={onFinish}>
        {children}
      </Form>
    </Modal>
  )
}
