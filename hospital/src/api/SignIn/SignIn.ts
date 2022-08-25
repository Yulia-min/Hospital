import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { AuthCodeResponse, FormDataAuthCode, FormDataSignIn, SignInResponse } from './SignIn.d'

const fetcher = new Fetcher()

export const requestSignIn = (data: FormDataSignIn) =>
  fetcher.requestToReceive<FormDataSignIn, SignInResponse>({
    url: 'auth/code/request/',
    method: HTTP_METHODS.POST,
    data
  })

export const requestAuthCode = (data: FormDataAuthCode) =>
  fetcher.requestToReceive<FormDataAuthCode, AuthCodeResponse>({
    url: 'auth/code/validate/',
    method: HTTP_METHODS.POST,
    data
  })
