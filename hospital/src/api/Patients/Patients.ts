import { HTTP_METHODS } from 'src/helper/api'
import { IPatient } from 'src/redux/types/patientsTypes'
import Fetcher from 'src/services/fetcher'
import { PatientsZipCode } from './PatientsType'

const fetcher = new Fetcher()

export const requestPatientsInfo = () =>
  fetcher.requestToReceive<{}, IPatient[]>({
    url: 'patients/',
    method: HTTP_METHODS.GET
  })

export const requestPostZipCode = (data: PatientsZipCode) =>
  fetcher.requestToReceive<PatientsZipCode, {}>({
    url: 'locations/validate/',
    method: HTTP_METHODS.POST,
    data
  })
