import { ADD_PRODUCT , SEARCH_ADD , BATTERY_DESCRIPTION_ADD,ADD_DirectSearch , ADD_AdditionalSearch, GET_BATTERY } from "../ActionTypes";


export const Add_Action = (batteryProduct)=>{
    return{
        type: ADD_PRODUCT,
        payload: batteryProduct
    }
}

export const Add_Search = (search)=>{
    return{
        type: SEARCH_ADD,
        payload: search
    }
}

export const Add_Battey_desc = (showQuery)=>{
    return{
        type: BATTERY_DESCRIPTION_ADD,
        payload: showQuery
    }
}


export const Add_directSearch_desc = (directSearch)=>{
    return{
        type: ADD_DirectSearch,
        payload: directSearch
    }
}

export const Add_optionSearch_desc = (optSearch)=>{
    return{
        type: ADD_AdditionalSearch,
        payload: optSearch
    }
}


