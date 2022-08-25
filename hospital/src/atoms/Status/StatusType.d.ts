import { VARIANTS } from 'src/constants'
export type StatusType = {
  variant: ValueOfObject<typeof VARIANTS>
  type: 'emr' | 'visits'
  children: React.ReactNode
}
