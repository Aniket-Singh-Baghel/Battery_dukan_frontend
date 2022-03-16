import { GET_BATTERY } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig3'

export const GetBatteryBrand = () => dispatch => {
    axios.get("/getBatteryBrand")
    .then(success =>{
        return dispatch({
            type: GET_BATTERY,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}