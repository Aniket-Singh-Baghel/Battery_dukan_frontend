import { GET_OEM_MODEL } from "../ActionTypes";

const initalState = {
    data: null,
};

export const OemModelReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_OEM_MODEL:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    default:
      return state;
  }
};
