import { CheckboxValueType } from 'antd/lib/checkbox/Group'

export type PersonalCardType = {
  patient: {
    uuid: string
    first_name: string
    last_name: string
    date_of_birth: string
    phone_number: string
    email: string
    home_address?: { address_line?: string }
  }
  comment?: string
  symptoms?: string[] | CheckboxValueType[]
  isShowEdit?: boolean
  isChecbox?: boolean
  isDefault?: boolean
  className?: string
  isHomeAddress?: boolean
}
