import { STATUS_VARIANTS } from 'src/constants'

export type RequestCardsType = {
  uuid: string
  is_grouped: boolean
  status: keyof typeof STATUS_VARIANTS
  urgency: string
  service: string
  patient_name: string
  doctor_name: string
  time: string
}
