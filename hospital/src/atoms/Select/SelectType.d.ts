export type SelectType = {
  onChange?: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
  name?: string
}
