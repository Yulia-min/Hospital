export interface IService {
  name: string
  comment: string
  is_visible: boolean
  price: number
  symptoms: ISymptom[]
}

export interface ISymptom {
  name: string
  comment: string
  uuid: string
}

export interface IServiceState {
  services: IService[]
  isLoading: boolean
  error: any | null
}
