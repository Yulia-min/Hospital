import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { API_HOSTS, BASE_URL, HTTP_METHODS } from '../helper/api'

interface IRequest<TData = Object> extends Omit<AxiosRequestConfig, 'data'> {
  prefixURL?: string
  data?: TData
}

const defaultConfig: IRequest = {
  prefixURL: '/',
  baseURL: BASE_URL,
  method: HTTP_METHODS.GET,
  timeout: 30 * 1000
}

class Fetcher {
  private instance: AxiosInstance

  constructor(config = defaultConfig) {
    const hostURL = config.baseURL || defaultConfig.baseURL
    const prefixURL = config.prefixURL || defaultConfig.prefixURL

    this.instance = axios.create({
      ...defaultConfig,
      ...config,
      baseURL: [prefixURL, hostURL].join('')
    })

    this.instance.interceptors.request.use((config: any) => {
      const access = localStorage.getItem('access')

      if (!access) {
        return config
      }

      const headers = {
        Authorization: `Bearer ${access}`
      }

      return { ...config, headers }
    })

    this.instance.interceptors.response.use(
      (response: any) => response,
      (error: any) => Promise.reject(error)
    )
  }

  handlerCatch = <TResponse>(e: AxiosError<TResponse>) => {
    throw e
  }

  request = <TData, TResponse = Object>(
    requestConfig: IRequest<TData>
  ): Promise<AxiosResponse<TResponse>> => {
    return this.instance
      .request({
        ...requestConfig,
        baseURL: [
          requestConfig.prefixURL || defaultConfig.prefixURL,
          requestConfig.baseURL || defaultConfig.baseURL
        ].join('')
      })
      .then((resp: any) => resp)
      .catch((e: AxiosError<TResponse>) => this.handlerCatch<TResponse>(e))
  }

  requestToReceive = <TData, TResponse = Object>(
    requestConfig: Omit<IRequest<TData>, 'baseURL'>
  ): Promise<AxiosResponse<TResponse>> =>
    this.request({
      ...requestConfig,
      baseURL: API_HOSTS
    })
}

export default Fetcher
