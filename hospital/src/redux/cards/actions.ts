import { requestCardsInfo as requestCardsInfoAPI } from 'src/api/Cards/Cards'
import { AppThunk } from '../store'
import { error, finish, loading, loadingSuccess } from '../reducers/cardsSlice'

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
