export type FormDataSignIn = {
  phone_number: string
  target: string
}

export type SignInResponse = {
  uuid: string
}

export type FormDataAuthCode = {
  user_uuid: string
  validation_code: string
}

export type AuthCodeResponse = {
  access: string
  refresh: string
}
