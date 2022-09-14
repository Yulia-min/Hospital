import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IPatient, IPatientState, IPatientWithSymptoms } from '../types/patientsTypes'

const initialState: IPatientState = {
  patients: [],
  patientWithSymptoms: [],
  choosenPatient: [],
  isLoading: false,
  error: null
}

export const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {
    loading(state: IPatientState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IPatientState, action: PayloadAction<IPatient[]>) {
      state.isLoading = false
      state.patients = action.payload
    },
    setPatient(state: IPatientState, action: PayloadAction<string[]>) {
      state.choosenPatient = action.payload
    },
    setPatientsWithSymptoms(state: IPatientState, action: PayloadAction<IPatientWithSymptoms[]>) {
      state.patientWithSymptoms = action.payload
    },
    finish(state: IPatientState) {
      state.isLoading = false
    },
    error(state: IPatientState, action: PayloadAction<{ error: IPatientState['error'] }>) {
      const { error } = action.payload
      state.error = error.response.data
    }
  }
})

export default patientsSlice.reducer
export const { loading, loadingSuccess, finish, error, setPatient, setPatientsWithSymptoms } =
  patientsSlice.actions
