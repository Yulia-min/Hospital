import { HTTP_METHODS } from 'src/helper/api'
import { IDoctor } from 'src/redux/types/doctorsTypes'
import Fetcher from 'src/services/fetcher'
import { DateType } from './ScheduleType'

const fetcher = new Fetcher()

export const getDoctorsSchedule = ({ event_date_after, event_date_before, doctors }: DateType) =>
  fetcher.requestToReceive<{}, IDoctor[]>({
    url: 'service-requests/calendar/events/',
    params: { event_date_after, event_date_before, doctors },
    method: HTTP_METHODS.GET
  })
