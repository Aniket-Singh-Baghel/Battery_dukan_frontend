import { ADD_PRODUCT } from "../ActionTypes";

const initialState = {
    batteries:[

    ]
};

const UserReducer = (state = initialState , userAction) => {

    switch(userAction.type){

        case ADD_PRODUCT:
            let products = [...state.batteries];
            products.push(userAction.payload);
            return{
                ...state,
                batteries:products
            }
      
        default:
            return state ;
    }    
}

export default UserReducer;
