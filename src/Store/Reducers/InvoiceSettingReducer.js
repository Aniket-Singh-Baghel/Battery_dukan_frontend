import { CREATE_INVOICE_SETTING, GET_INVOICE_SETTING } from "../ActionTypes";

const initalState = {
  data: null,
};

export const InvoiceSettingReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case CREATE_INVOICE_SETTING:
      return {
        ...state,
        ...payload,
      };

    case GET_INVOICE_SETTING:
      console.log(payload);
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

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
