import { STATUS_VARIANTS } from 'src/constants'

export type RequestCardsType = {
  request: {
    uuid: string
    is_grouped: boolean
    service_request_status: keyof typeof STATUS_VARIANTS
    urgency_type: string
    service_type: string
    patient_name: string
    doctor_initials: string
    application_can_start_at: string
    application_time: string
    doctor_uuid: string
  }
}
