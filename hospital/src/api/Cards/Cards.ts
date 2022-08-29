import { HTTP_METHODS } from 'src/helper/api'
import { ICard } from 'src/redux/types/cardsTypes'
import { IService } from 'src/redux/types/servicesTypes'
import Fetcher from 'src/services/fetcher'

const fetcher = new Fetcher()

export const requestCardsInfo = () =>
  fetcher.requestToReceive<{}, ICard[]>({
    url: 'service-requests/calendar/events/?event_date_after=1971-02-24T00:00&event_date_before=2200-02-24T00:00&grouping=true',
    method: HTTP_METHODS.GET
  })

export const requestServiceType = () =>
  fetcher.requestToReceive<{}, IService[]>({
    url: 'service-requests/types/',
    method: HTTP_METHODS.GET
  })
