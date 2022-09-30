export type PatientInfoType = {
  date_of_birth: string
  email: string
  first_name: string
  home_address: string
  last_name: string
  phone_number: string
  sex: string
}

export type PatientHomeAddressType = {
  home_address?: {
    zip_code: string | undefined
    address_line: string
    apartment: string | null
    address: string | undefined
    state: string | undefined
    city: string | undefined
  }
}
