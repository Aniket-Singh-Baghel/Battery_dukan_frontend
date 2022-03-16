import { LOGIN_SUCCESS, LOGIN_FAIL, LOADING_TRUE } from '../ActionTypes'
import jwt_decode from 'jwt-decode'

const initialState = {
    isAuthenticated: localStorage.getItem('token') ? true : false,
    token: localStorage.getItem('token') || null,
    users: localStorage.getItem('token') ? jwt_decode(localStorage.getItem('token')) : null,
    error: null,
    loading: false,
}

export const loginReducer = (state = initialState , {type, payload}) => {
    switch (type) {
        case LOADING_TRUE:
            return {
                ...state,
                loading: true,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false,
            }
        case LOGIN_FAIL:
            return{
                ...state,
                error: payload,
                isAuthenticated: false,
                loading: false,
            }
    
        default:
            return state;
    }

}