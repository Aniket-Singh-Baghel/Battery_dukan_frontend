import { GET_CATEGORY } from "../ActionTypes";

const initalState = {
    data: null,
};

export const CategoryReducer = (state = initalState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY:
      return {
        ...state,
        ...payload,
        data: payload.Data,
      };

    default:
      return state;
  }
};
