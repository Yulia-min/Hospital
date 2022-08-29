import { requestServiceType as requestServiceTypeAPI } from 'src/api/Cards/Cards'
import { AppThunk } from '../store'
import { error, finish, loading, loadingSuccess } from '../reducers/servicesSlice'

export const requestServiceType = (): AppThunk => async (dispatch) => {
  try {
    dispatch(loading())
    const response = await requestServiceTypeAPI()
    dispatch(loadingSuccess(response.data))
  } catch (err) {
    dispatch(error({ error: err }))
  } finally {
    dispatch(finish())
  }
}
