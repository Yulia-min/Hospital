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

export interface IChoosenPatient {
  selectedPatientsIds: string[]
}

export interface IPatientState {
  patients: IPatient[]
  choosenPatient: IChoosenPatient | null
  isLoading: boolean
  error: any | null
}
