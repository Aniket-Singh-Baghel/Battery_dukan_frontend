import { GET_OEM_MODEL } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig3'

export const GetOemModel = () => dispatch => {
    axios.get("/getOemModel")
    .then(success => {
        return dispatch({
            type: GET_OEM_MODEL,
            payload: success.data,
          })
    })
    .catch(err => console.error(err))
}