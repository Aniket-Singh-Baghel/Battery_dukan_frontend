import { GET_BATTERY_MODEL } from "../ActionTypes";

const initalState = {
    data: null,
};

export const BatteryModelReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_BATTERY_MODEL:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    default:
      return state;
  }
};
