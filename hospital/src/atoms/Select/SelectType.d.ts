export type SelectType = {
  multiple?: 'multiple'
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder: string
}
