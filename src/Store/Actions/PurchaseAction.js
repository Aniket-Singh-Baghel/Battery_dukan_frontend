import { CREATE_PURCHASE } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig4'

export const CreatePurchase = (data) => dispatch => {
    axios.post("/purchaseCreate", data)
    .then(success => {
        console.log(success)
        // return dispatch({
        //     type: CREATE_PURCHASE,
        //     payload: success.data,
        //   }); 
    })
    .catch(err => console.error(err))
}

// export const GetBatteryBrand = () => dispatch => {
//     axios.get("/getBatteryBrand")
//     .then(success =>{
//         return dispatch({
//             type: SHOW_BATTERY_BRAND,
//             payload: success.data,
//           }); 
//     })
//     .catch(err => console.error(err))
// }


// export const DeleteBatteryBrand = (id) => dispatch => {
//     axios.delete(`/batteryBrand/delete/${id}`)
//     .then(success => {
//         return dispatch(GetBatteryBrand());
//     })
//     .catch(err => console.error(err))
// }