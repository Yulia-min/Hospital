import { Default } from './input.default'
import { Phone } from './input.phone'
import { Code } from './input.code'
import { InputType } from './InputType'
import { TextArea } from './input.textArea'

export const Input = ({ ...props }: InputType) => <Default {...props} />

Input.Default = Default
Input.Phone = Phone
Input.Code = Code
Input.TextArea = TextArea
