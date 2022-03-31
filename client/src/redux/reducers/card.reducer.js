import { INIT_CARD } from "../actionType";


export function cardReducer (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case INIT_CARD: {
      return payload;
    }

    default: {
      return state;
    }
  }
}
