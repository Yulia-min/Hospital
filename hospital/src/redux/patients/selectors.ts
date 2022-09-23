import { IPatientState } from '../types/patientsTypes'

export const getPatientsInfo = (state: { patients: IPatientState }) => state.patients
export const getChoosenPatientsInfo = (state: { choosenPatient: IPatientState }) =>
  state.choosenPatient
export const getPaientsWithSymptoms = (state: { patientWithSymptoms: IPatientState }) =>
  state.patientWithSymptoms
export const getPaientsAddress = (state: { patientsAddress: IPatientState }) =>
  state.patientsAddress
