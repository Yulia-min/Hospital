import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { CardsInfoResponse, ServicesInfoResponse } from './Cards.d'

const fetcher = new Fetcher()

export const requestCardsInfo = () =>
  fetcher.requestToReceive<{}, CardsInfoResponse[]>({
    url: 'service-requests/calendar/events/?event_date_after=1971-02-24T00:00&event_date_before=2200-02-24T00:00&grouping=true',
    method: HTTP_METHODS.GET
  })

export const requestServiceType = () =>
  fetcher.requestToReceive<{}, ServicesInfoResponse[]>({
    url: 'service-requests/types/',
    method: HTTP_METHODS.GET
  })
