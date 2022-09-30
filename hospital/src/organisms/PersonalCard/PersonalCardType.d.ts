export type PersonalCardType = {
  patient: {
    uuid: string
    first_name: string
    last_name: string
    date_of_birth: string
    phone_number: string
    email: string
    home_address?: { address_line?: string }
    symptoms?: CheckboxValueType[]
    comment?: string
  }
  isShowEdit?: boolean
  isChecbox?: boolean
  isDefault?: boolean
  className?: string
  isHomeAddress?: boolean
}
