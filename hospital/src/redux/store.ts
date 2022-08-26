import { ThunkAction, Action, configureStore } from '@reduxjs/toolkit'
import cardsSlice from './reducers/cardsSlice'

export const store = configureStore({
  reducer: {
    cards: cardsSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>
