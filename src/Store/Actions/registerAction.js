import { REGISTER_SUCCESS, REGISTER_FAIL } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig'

export const registerUser = (newUser) => dispatch => {
      axios.post('/signup', newUser)
      .then( success => { 
            console.log( success)
            return dispatch(successRegister());
      })
      // .catch(fail => {
      //       return dispatch(fail)
      // })
}

export const successRegister = (register) => ({
      type: REGISTER_SUCCESS,
      payload: register
})