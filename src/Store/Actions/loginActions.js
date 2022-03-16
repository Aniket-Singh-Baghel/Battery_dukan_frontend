import { LOGIN_SUCCESS, LOGIN_FAIL} from '../ActionTypes'
import axios from '../../Utils/AxiosConfig'

export const loginUser = (authUser) => dispatch => {
      axios.post('/login', authUser)
      .then( success => {
            return dispatch(successLogin(success.data))
      })
      .catch(fail => {
            console.log(fail.response)
            return dispatch(failLogin(fail.response))
      })
}

export const successLogin = (auth) => ({
      type: LOGIN_SUCCESS,
      payload: auth
})

export const failLogin = (data) => ({
      type: LOGIN_FAIL,
      payload: data
})