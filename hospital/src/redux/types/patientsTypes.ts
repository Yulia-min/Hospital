import { CheckboxValueType } from 'antd/lib/checkbox/Group'

export interface IPatient {
  uuid: string
  client_patient_relationship: string
  date_of_birth: string
  email: string
  first_name: string
  home_address: {}
  last_name: string
  phone_number: string
  sex: string
  status: string
  verbose_id: string
}

export interface IPatientWithSymptoms extends IPatient {
  symptoms?: CheckboxValueType[]
  comment?: string
}

export interface IPatientsAddress {
  full_address: {
    address: string
    city: string | undefined
    state: string | undefined
    street: string | undefined
  }[]
  latLng: {
    lat: number
    lng: number
  }
  zip_code: string
  suite?: string
  additional_info?: string
}

export interface IPatientState {
  patients: IPatient[]
  patientsAddress: IPatientsAddress
  patientWithSymptoms: IPatientWithSymptoms[]
  choosenPatient: string[]
  isLoading: boolean
  error: any | null
}
