export type PatientsZipCode = {
  zip_code: string
}

export type PatientsDateInfo = {
  date: string
  zip_code: string
  patients_number: number
  address_line: string
}

export type PatientDateInfoType = {
  start: string
  end: string
  is_free: boolean
}

export type PatientsRequest = {
  idempotency_key: string
  application_can_start_at?: string
  application_time?: string
  urgency_type: string
  service_type: string
  location: {
    zip_code: string
    address_line: string | undefined
    apartment: null
    comment: string | undefined
    address: string | undefined
    state: string | undefined
    city: string | undefined
  }
  single_service_requests: {
    service_type: string
    symptoms: CheckboxValueType[]
    patient: string
  }[]
  payment_profile_id: string
}
