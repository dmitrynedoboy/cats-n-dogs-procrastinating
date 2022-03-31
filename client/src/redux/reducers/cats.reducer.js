import { INIT_FAV_CATS, ADD_FAV_CAT } from "../actionType";

export function catsReducer (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case INIT_FAV_CATS: {
      return state;
    }

    case ADD_FAV_CAT: {
      return [...state, payload];
    }

    default: {
      return state;
    }
  }
}
