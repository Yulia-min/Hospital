import { Form } from 'antd'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Input } from 'src/atoms'
import { requestSignIn } from 'src/constants/Api/SignIn/SignIn'
import { FormDataSignIn } from 'src/constants/Api/SignIn/SignIn.d'
import { LoginForm } from 'src/organisms'
import './SignIn.scss'

export const SignIn = () => {
  const [form] = Form.useForm()

  const navigate = useNavigate()

  const [phone, setPhone] = useState('')
  const onChange = (phone: string) => {
    setPhone(phone)
  }

  const formatPhoneNumber = (phoneNumberString: string) => {
    const cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/)
    if (match) {
      return '+' + match[1] + '(' + match[2] + ') ' + match[3] + '-' + match[4]
    }
    return ''
  }

  const onFinish = (values: FormDataSignIn) => {
    const getPhone = formatPhoneNumber(values.phone_number)
    requestSignIn({ phone_number: getPhone, target: 'admin' }).then((resp) => {
      localStorage.setItem('uuid', resp.data.uuid)
      navigate('/auth', { state: { phone: values.phone_number } })
    })
  }
  return (
    <LoginForm
      visible
      firstTitle="Please Enter Your Cell Phone Number Below"
      secondTitle="This will allow us to safely and securely manage your pre-registration account"
      onFinish={onFinish}
      form={form}
    >
      <Form.Item name="phone_number">
        <Input.Phone value={phone} onChange={onChange} />
      </Form.Item>
      <div className="login-button-wrapper">
        <Form.Item>
          <Button variant="primary">Next</Button>
        </Form.Item>
      </div>
    </LoginForm>
  )
}
