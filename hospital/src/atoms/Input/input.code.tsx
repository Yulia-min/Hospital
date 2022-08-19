import AuthCode from 'react-auth-code-input'
import { InputType } from './InputType'

export const Code = ({ onChange }: InputType) => {
  return <AuthCode inputClassName="code-input" allowedCharacters="numeric" onChange={onChange} />
}
