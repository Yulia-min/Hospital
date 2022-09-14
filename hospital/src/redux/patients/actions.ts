import { requestPatientsInfo as requestPatientsInfoAPI } from 'src/api/Patients/Patients'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  setPatient,
  setPatientsWithSymptoms
} from '../reducers/patientsSlice'
import { IPatientWithSymptoms } from '../types/patientsTypes'

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
