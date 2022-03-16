import { GET_BATTERY_MODEL } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig3'

export const GetBatteryModel = () => dispatch => {
    axios.get("/getBatteryModel")
    .then(success =>{
        return dispatch({
            type: GET_BATTERY_MODEL,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}