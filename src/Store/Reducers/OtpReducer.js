import { OTP_SUCCESS, OTP_FAIL, LOADING_TRUE } from '../ActionTypes'
import jwt_decode from 'jwt-decode'

const initialState = {
   otpVerifide: false,
    error: null,
    loading: false,
}

export const otpReducer = (state = initialState , {type, payload}) => {
    switch (type) {
        case LOADING_TRUE:
            return {
                ...state,
                loading: true,
            }
        case OTP_SUCCESS:
            return{
                ...state,
                otpVerifide: true,
                loading: false,
            }
        case OTP_FAIL:
            return{
                ...state,
                error: payload,
                loading: false,
            }
    
        default:
            return state;
    }

}