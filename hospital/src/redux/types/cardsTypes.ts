export interface ICard {
  application_can_start_at: string
  application_time: string
  doctor_name: string
  doctor_initials: string
  doctor_uuid: string
  is_grouped: boolean
  is_requester: boolean
  patient_client_relationship: {}
  patient_date_of_birth: string
  patient_email: string
  patient_name: string
  patient_phone_number: string
  patient_status: string
  patients: string[]
  requester: string
  requests_count: number
  requests_in_group: number
  service_request_chat: {}
  service_request_status: string
  service_type: string
  status: string
  urgency_type: string
  uuid: string
}

export interface ICardsState {
  cards: ICard[]
  isLoading: boolean
  isLoaded: boolean
  error: any | null
}
