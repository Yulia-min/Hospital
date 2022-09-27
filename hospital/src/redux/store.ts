import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import cardsSlice from './reducers/cardsSlice'
import patientsSlice from './reducers/patientsSlice'
import servicesSlice from './reducers/servicesSlice'

export const store = configureStore({
  reducer: {
    cards: cardsSlice,
    services: servicesSlice,
    patients: patientsSlice,
    choosenPatient: patientsSlice,
    patientsAddress: patientsSlice,
    patientWithSymptoms: patientsSlice,
    patientsDate: patientsSlice,
    choosenRequestType: patientsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
