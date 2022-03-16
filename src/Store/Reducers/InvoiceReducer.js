import { CREATE_INVOICE } from "../ActionTypes";

const initalState = {
  data: null,
};

export const InvoiceReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_INVOICE:
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
