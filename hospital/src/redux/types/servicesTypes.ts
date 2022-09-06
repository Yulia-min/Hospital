export interface IService {
  name: string
  comment: string
  is_visible: boolean
  price: number
  symptoms: ISymptom[]
}

export interface ISymptom {
  name: string
  image: string
  uuid: string
}

export interface IServiceState {
  services: IService[]
  isLoading: boolean
  error: any | null
}

export interface ISymptomState {
  services: ISymptom[]
  isLoading: boolean
  error: any | null
}
