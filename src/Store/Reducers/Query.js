import { SEARCH_ADD , BATTERY_DESCRIPTION_ADD, ADD_DirectSearch , ADD_AdditionalSearch } from "../ActionTypes";

const initialState = {
    search:[],
    batteryDesc:[],
    directSearch:[null],
    opt:[]

};


const SearchReducer = (state = initialState , userAction) => {

    switch(userAction.type){
        case SEARCH_ADD:
            let search = [...state.search];
            let batteryRemove = [...state.directSearch];
            batteryRemove = [null];
            search.unshift(userAction.payload);
            return{
                ...state,
                search:search,
                directSearch:batteryRemove
            }

        case BATTERY_DESCRIPTION_ADD:
            let desc = [...state.batteryDesc];
            desc = [];
            desc.unshift(userAction.payload);
            return{
                ...state,
                batteryDesc:desc
            }    

        case ADD_DirectSearch:
            let directSearch = [...state.directSearch];
            directSearch = [];
            directSearch.unshift(userAction.payload);
            return{
                ...state,
                directSearch:directSearch
            }   
              
        case ADD_AdditionalSearch:
            let optionalSearch = [...state.opt];
            optionalSearch = [];
            optionalSearch.unshift(userAction.payload);
            return{
                ...state,
                opt:optionalSearch
            }         
            
      
        default:
            return state ;
    }    
}

export default SearchReducer;