import { requestCardsInfo as requestCardsInfoAPI } from 'src/api/Cards/Cards'
import { getRequestDetailsInfo as getRequestDetailsInfoAPI } from 'src/api/Cards/Cards'
import { AppThunk } from '../store'
import {
  error,
  finish,
  loading,
  loadingSuccess,
  setRequestDetails,
  setClearRequestDetails
} from '../reducers/cardsSlice'

export const requestCardsInfo = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await requestCardsInfoAPI()
    dispatch(loadingSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}

export const getRequestDetailsInfo =
  (uuid: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(loading())
      const response = await getRequestDetailsInfoAPI(uuid)
      dispatch(setRequestDetails(response.data))
    } catch (err) {
      dispatch(error({ error: err }))
    } finally {
      dispatch(finish())
    }
  }

export const clearRequestDetails = (): AppThunk => async (dispatch) => {
  dispatch(setClearRequestDetails())
}
