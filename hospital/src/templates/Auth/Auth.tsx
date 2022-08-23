import { Form } from 'antd'
import { useLocation } from 'react-router-dom'
import { Button, Input } from 'src/atoms'
import { requestAuthCode } from 'src/constants/Api/SignIn/SignIn'
import { FormDataAuthCode } from 'src/constants/Api/SignIn/SignIn.d'
import { LoginForm } from 'src/organisms'
import { LocationType } from './AuthType'
import { useState } from 'react'
import './Auth.scss'

export const Auth = () => {
  const [form] = Form.useForm()

  const [, setResult] = useState<string>()

  const user_uuid = localStorage.getItem('uuid')
  const location = useLocation().state as LocationType

  const onFinish = (values: FormDataAuthCode) => {
    user_uuid &&
      requestAuthCode({ ...values, user_uuid }).then((resp) => {
        localStorage.setItem('access', resp.data.access)
        localStorage.setItem('refresh', resp.data.refresh)
        alert('Success')
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

  const onChange = (result: string) => {
    setResult(result)
  }

  return (
    <LoginForm
      visible
      firstTitle="Security Is Very Important To Us."
      secondTitle={`We will now send secure verification correspondence to your cell phone number at ${formatPhoneNumber(
        location?.phone
      )}`}
      onFinish={onFinish}
      form={form}
    >
      <Input.Code className="input-code" name="validation_code" onChange={onChange} />
      <Form.Item className="auth-button wrapper">
        <Button className="resend-button" variant="secondary">
          Resend
        </Button>
        <Button variant="primary">Next</Button>
      </Form.Item>
    </LoginForm>
  )
}
