import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IServiceState, IService } from '../types/servicesTypes'

const initialState: IServiceState = {
  services: [],
  isLoading: false,
  error: null
}

export const servicesSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    loading(state: IServiceState) {
      state.isLoading = true
      state.error = null
    },
    loadingSuccess(state: IServiceState, action: PayloadAction<IService[]>) {
      state.isLoading = false
      state.services = action.payload
    },
    finish(state: IServiceState) {
      state.isLoading = false
    },
    error(state: IServiceState, action: PayloadAction<{ error: IServiceState['error'] }>) {
      const { error } = action.payload
      state.error = error.response.data
    }
  }
})

export default servicesSlice.reducer
export const { loading, loadingSuccess, finish, error } = servicesSlice.actions
