import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IChoosenPatient, IPatient, IPatientState } from '../types/patientsTypes'

const initialState: IPatientState = {
  patients: [],
  choosenPatient: null,
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
    setPatient(state: IPatientState, action: PayloadAction<IChoosenPatient>){
      state.choosenPatient = action.payload
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
export const { loading, loadingSuccess, finish, error, setPatient } = patientsSlice.actions
