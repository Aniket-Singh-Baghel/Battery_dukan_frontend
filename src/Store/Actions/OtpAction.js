import { OTP_SUCCESS, OTP_FAIL} from '../ActionTypes'
import axios from '../../Utils/AxiosConfig'

export const userOtp = (otp) => dispatch => {
      axios.post('/otp', otp)
      .then( success => {
            console.log(success)
            return dispatch(successotp(success.data))
      })
      .catch(fail => {
            return dispatch(fail)
      })
}

export const successotp = (auth) => ({
      type: OTP_SUCCESS,
      payload: auth
})