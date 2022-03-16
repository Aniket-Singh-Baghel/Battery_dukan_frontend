import { CREATE_INVOICE_SETTING, GET_INVOICE_SETTING } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig4'

export const CreateInvoiceSetting = (data) => dispatch => {
    axios.post("/invoiceSettingCreate", data)
    .then(success => {
        console.log(success)
        return dispatch({
            type: CREATE_INVOICE_SETTING,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}

export const GetInvoiceSetting = () => dispatch => {
    axios.get("/getInvoiceSetting")
    .then(success =>{
        return dispatch({
            type: GET_INVOICE_SETTING,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}


// export const DeleteBatteryBrand = (id) => dispatch => {
//     axios.delete(`/batteryBrand/delete/${id}`)
//     .then(success => {
//         return dispatch(GetBatteryBrand());
//     })
//     .catch(err => console.error(err))
// }