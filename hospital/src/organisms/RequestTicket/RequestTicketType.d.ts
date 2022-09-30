import { STATUS_VARIANTS } from 'src/constants'

export type RequestTicketType = {
  request_type?: string
  date?: string
  time?: string
  first_name?: string
  last_name?: string
  phone_number?: string
  email?: string
  isTime?: string
  className?: string
  isRequestStatus?: boolean
  is_group?: boolean
  status?: keyof typeof STATUS_VARIANTS
}
