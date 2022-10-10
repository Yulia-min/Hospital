export type EventType = {
  item: {
    service_request_status: string
    requests_in_group: number
    patient_name: string
  }
}

export type NavigateAction = 'PREV' | 'NEXT' | 'TODAY' | 'DATE'

export interface ICustomTooolbar {
  onNavigate: (navigate: NavigateAction, date?: Date) => void
  date: Date
}

export type ViewType = 'week' | 'day'

export interface ICustomHeader {
  date: Date
  label: string
}
