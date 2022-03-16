import { CREATE_PURCHASE } from "../ActionTypes";

const initalState = {
  data: null,
};

export const PurchaseReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_PURCHASE:
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
