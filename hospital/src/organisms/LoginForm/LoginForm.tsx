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
      <Typography.Headline4 className="modal__title">{title}</Typography.Headline4>
      <Typography.Subtitle1 className="modal__description">{subtitle}</Typography.Subtitle1>
      <Form className="modal__form" form={form} onFinish={onFinish}>
        {children}
      </Form>
    </Modal>
  )
}
