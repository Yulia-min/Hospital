import { IPatientState } from '../types/patientsTypes'

export const getPatientsInfo = (state: { patients: IPatientState }) => state.patients
export const getChoosenPatientsInfo = (state: { choosenPatient: IPatientState }) => state.choosenPatient
