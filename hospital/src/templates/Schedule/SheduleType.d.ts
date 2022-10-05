export type EventType = {
  item: {
    service_request_status: string
    requests_in_group: number
    patient_name: string
  }
}

export interface ICustomTooolbar {
  onNavigate: (action: any) => void
}
