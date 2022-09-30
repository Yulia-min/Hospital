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

export interface IRequestDetails {
  application_can_start_at: string
  application_time: string
  cancellation_reason: {}
  client_user: string
  client_user_info: {
    date_of_birth: string
    email: string
    first_name: string
    last_name: string
    phone_number: string
    sex: string
    uuid: string
  }
  doctor_5_mins_left_should_arrive_at: {}
  doctor_arrived_at: {}
  doctor_data: {
    initials: string
    uuid: string
  }
  doctor_should_arrive_at: {}
  examined_patients_number: number
  finished_at: {}
  is_group: boolean
  location: {
    address: string
    address_line: string
    apartment: {}
    city: string
    comment: string
    state: string
    uuid: string
    zip_code: string
  }
  patients: {
    additional_services: []
    comment: string
    doctor_comment: {}
    examination_status: {}
    is_deleted: boolean
    patient: string
    patient_info: {
      client_patient_relationship: {}
      date_of_birth: string
      email: string
      first_name: string
      home_address: {}
      last_name: string
      phone_number: string
      sex: string
      status: string
      uuid: string
      verbose_id: string
    }
    patient_is_new: boolean
    patient_signature_path: {}
    status: string
    symptoms: string[]
    uuid: string
  }[]
  patients_number: number
  promo_codes: {}
  service_request_chat: {
    expire_at: string
    has_unread_messages: boolean
    start_at: string
    twilio_chat_sid: string
  }
  service_type: string
  status: string
  total_visit_price: number
  urgency_type: string
  uuid: string
  view_only: boolean
  visit_price: number
}

export interface ICardsState {
  cards: ICard[]
  requestDetails: IRequestDetails | null
  isLoading: boolean
  isLoaded: boolean
  error: any | null
}
