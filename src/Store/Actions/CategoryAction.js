import { GET_CATEGORY } from '../ActionTypes'
import axios from '../../Utils/AxiosConfig3'

export const GetCategory = () => dispatch => {
    axios.get("/getCategory")
    .then(success =>{
        return dispatch({
            type: GET_CATEGORY,
            payload: success.data,
          }); 
    })
    .catch(err => console.error(err))
}