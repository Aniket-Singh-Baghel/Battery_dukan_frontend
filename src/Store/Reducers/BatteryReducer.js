import { GET_BATTERY } from "../ActionTypes";

const initalState = {
    data: null,
};

export const BatteryBrandReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_BATTERY:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    default:
      return state;
  }
};
