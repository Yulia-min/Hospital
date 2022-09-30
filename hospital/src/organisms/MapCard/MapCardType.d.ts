export type MapCardType = {
  coordinates: {
    lat: number
    lng: number
  }
  address_line: string | string[] | undefined
  className?: string
}
