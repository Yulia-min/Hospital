import { IDoctor } from 'src/redux/types/doctorsTypes'

export type EventType = {
  item: {
    service_request_status: string
    requests_in_group: number
    patient_name: string
  }
}

export type NavigateAction = 'PREV' | 'NEXT' | 'TODAY' | 'DATE'
export type View = 'month' | 'week' | 'work_week' | 'day' | 'agenda'

export interface ICustomTooolbar {
  onNavigate: (navigate: NavigateAction, date?: Date) => void
  date: Date
  view: View
}

export interface ICustomHeader {
  date: Date
  label: string
}

export type EventPropGetter = {
  title: {
    props: {
      item: IDoctor
    }
  }
  start: Date
  end: Date
}
