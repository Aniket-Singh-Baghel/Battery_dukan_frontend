import { CREATE_SALE } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig4'

export const CreateSale = (data) => dispatch => {
    axios.post("/salesCreate", data)
    .then(success => {
        console.log(success)
        // return dispatch({
        //     type: CREATE_SALE,
        //     payload: success.data,
        //   }); 
    })
    .catch(err => console.error(err))
}

