import { GET_BATTERY } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig3'

export const GetBatteryBrand = () => (dispatch) => {
    axios
      .get("/get-all-battery-brands")
      .then((success) => {

        console.log("success  data from  ::99 ",success.data);
        return dispatch({
          type: GET_BATTERY,
          payload: success.data.data,
        });
      })
      .catch((err) => console.error(err));
}