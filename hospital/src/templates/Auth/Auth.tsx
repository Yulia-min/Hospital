import { Form } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, Input } from 'src/atoms'
import { requestAuthCode } from 'src/api/SignIn/SignIn'
import { FormDataAuthCode } from 'src/api/SignIn/SignIn.d'
import { LoginForm } from 'src/organisms'
import { LocationType } from './AuthType'
import './Auth.scss'

export const Auth = () => {
  const [form] = Form.useForm()

  const navigate = useNavigate()

  const user_uuid = localStorage.getItem('uuid')
  const location = useLocation().state as LocationType

  const onFinish = (values: FormDataAuthCode) => {
    user_uuid &&
      requestAuthCode({ ...values, user_uuid }).then((resp) => {
        localStorage.setItem('access', resp.data.access)
        localStorage.setItem('refresh', resp.data.refresh)
        navigate('/visits-list')
      })
  }

  const formatPhoneNumber = (phoneNumberString: string) => {
    const inintialString = phoneNumberString?.slice(1)
    const cleaned = ('' + inintialString).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return ''
  }

  return (
    <LoginForm
      visible
      title="Security Is Very Important To Us."
      subtitle={`We will now send secure verification correspondence to your cell phone number at ${formatPhoneNumber(
        location?.phone
      )}`}
      onFinish={onFinish}
      form={form}
    >
      <Input.Code propsItem={{ name: 'validation_code' }} />
      <Form.Item className="auth-button wrapper">
        <Button.Default className="resend-button" variant="secondary">
          Resend
        </Button.Default>
        <Button.Default propsButton={{ htmlType: 'submit' }} variant="primary">
          Next
        </Button.Default>
      </Form.Item>
    </LoginForm>
  )
}
