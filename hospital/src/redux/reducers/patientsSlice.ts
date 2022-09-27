import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import {
  IPatient,
  IPatientsAddress,
  IPatientsDate,
  IPatientState,
  IPatientWithSymptoms
} from '../types/patientsTypes'

const initialState: IPatientState = {
  patients: [],
  patientsAddress: {
    full_address: [],
    latLng: { lat: 0, lng: 0 },
    zip_code: ''
  },
  patientsDate: {
    request_type: '',
    date: '',
    time: ''
  },
  choosenRequestType: '',
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
    setPatientsAddress(state: IPatientState, action: PayloadAction<IPatientsAddress>) {
      state.patientsAddress = action.payload
    },
    setPatientsDate(state: IPatientState, action: PayloadAction<IPatientsDate>) {
      state.patientsDate = action.payload
    },
    setRequestType(state: IPatientState, action: PayloadAction<string>) {
      state.choosenRequestType = action.payload
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
export const {
  loading,
  loadingSuccess,
  finish,
  error,
  setPatient,
  setPatientsWithSymptoms,
  setPatientsAddress,
  setPatientsDate,
  setRequestType
} = patientsSlice.actions
