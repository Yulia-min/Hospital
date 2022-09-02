import { HTTP_METHODS } from 'src/helper/api'
import { IPatient } from 'src/redux/types/patientsTypes'
import Fetcher from 'src/services/fetcher'

const fetcher = new Fetcher()

export const requestPatientsInfo = () =>
  fetcher.requestToReceive<{}, IPatient[]>({
    url: 'patients/',
    method: HTTP_METHODS.GET
  })
