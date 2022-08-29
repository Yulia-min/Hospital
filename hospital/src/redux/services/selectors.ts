import { IServiceState } from '../types/servicesTypes'

export const getServiceInfo = (state: { services: IServiceState }) => state.services
