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
