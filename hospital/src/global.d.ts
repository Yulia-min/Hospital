declare global {
  type ValueOfObject<T> = T extends T ? T[keyof T] : never
}
