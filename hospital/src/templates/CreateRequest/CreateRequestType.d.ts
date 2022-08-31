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

