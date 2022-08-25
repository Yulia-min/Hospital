import { HTTP_METHODS } from 'src/helper/api'
import Fetcher from 'src/services/fetcher'
import { CardsData, CardsInfoResponse  } from './Cards.d'

const fetcher = new Fetcher()

export const requestCardsInfo = () =>
  fetcher.requestToReceive<CardsData, CardsInfoResponse[]>({
    url: 'service-requests/calendar/events/?event_date_after=1971-02-24T00:00&event_date_before=2200-02-24T00:00&grouping=true',
    method: HTTP_METHODS.GET,
  })
