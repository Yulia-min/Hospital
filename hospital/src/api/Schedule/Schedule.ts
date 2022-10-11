import { HTTP_METHODS } from 'src/helper/api'
import { IDoctor } from 'src/redux/types/doctorsTypes'
import Fetcher from 'src/services/fetcher'

const fetcher = new Fetcher()

export const getDoctorsSchedule = (
  event_date_after: string,
  event_date_before: string,
  doctors?: string
) =>
  fetcher.requestToReceive<{}, IDoctor[]>({
    url: 'service-requests/calendar/events/',
    params: { event_date_after, event_date_before, doctors },
    method: HTTP_METHODS.GET
  })
