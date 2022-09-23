export type RequestType = {
  personal_data: string[]
  other_data: string[]
  family_data: string[]
  friends_data: string[]
}

export type CheckedListType = {
  family: string[]
  friends: string[]
  other: string[]
  familyChecked: boolean
  friendsChecked: boolean
  otherChecked: boolean
}

export type PatientListType = {
  family: string[]
  friends: string[]
  other: string[]
}

export interface ICreateRequest {
  step: number
  setStep: Dispatch<SetStateAction<number>>
}

export type CoordinatesType = {
  lat: number
  lng: number
}

export type PatientsAddressType = {
  suite?: string
  additional_info?: string
}

export type PatientWithSymptomsListType = {
  family: string[]
  friends: string[]
  other: string[]
  you: string[]
}
