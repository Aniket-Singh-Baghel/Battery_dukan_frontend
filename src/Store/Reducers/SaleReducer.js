import { CREATE_SALE } from "../ActionTypes";

const initalState = {
  data: null,
};

export const SaleReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_SALE:
      return {
        ...state,
        ...payload,
      };

    // case SHOW_BATTERY_BRAND:
    //   return {
    //     ...state,
    //     ...payload,
    //     data: payload.Data,
    //   };

    // case DELETE_BATTERY_BRAND:
    //   let copyData = [...state.data];
    //   return {
    //     ...state,
    //     data: copyData.splice((item, index) => index !== payload),
    //   };

    default:
      return state;
  }
};
