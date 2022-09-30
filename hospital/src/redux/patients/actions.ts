import { requestPatientsInfo as requestPatientsInfoAPI } from 'src/api/Patients/Patients'
import { getPatientInfo as getPatientInfoAPI } from 'src/api/Patients/Patients'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  setPatient,
  setPatientsWithSymptoms,
  setPatientsAddress,
  setPatientsDate,
  setRequestType,
  setCurrentPatient
} from '../reducers/patientsSlice'
import { IPatientsAddress, IPatientsDate, IPatientWithSymptoms } from '../types/patientsTypes'

export const requestPatientsInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await requestPatientsInfoAPI()
    dispatch(loadingSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const saveChoosenPatient =
  (values: string[]): AppThunk =>
  async (dispatch) => {
    dispatch(setPatient(values))
  }

export const savePatientWithSymptoms =
  (data: IPatientWithSymptoms[]): AppThunk =>
  async (dispatch) => {
    dispatch(setPatientsWithSymptoms(data))
  }

export const savePatientAddress =
  (data: IPatientsAddress): AppThunk =>
  async (dispatch) => {
    dispatch(setPatientsAddress(data))
  }

export const savePatientDate =
  (data: IPatientsDate): AppThunk =>
  async (dispatch) => {
    dispatch(setPatientsDate(data))
  }

export const saveRequestType =
  (data: string): AppThunk =>
  async (dispatch) => {
    dispatch(setRequestType(data))
  }

export const getPatientInfo =
  (uuid: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const response = await getPatientInfoAPI(uuid)
      dispatch(setCurrentPatient(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }
