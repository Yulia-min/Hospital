export type PersonalCardType = {
  patient: {
    first_name: string
    last_name: string
    date_of_birth: string
    phone_number: string
    email: string
    symptoms?: CheckboxValueType[]
    comment?: string
  }
  isShowEdit?: boolean
  isChecbox?: boolean
  isDefault?: boolean
}
