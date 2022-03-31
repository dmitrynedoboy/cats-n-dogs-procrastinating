import { INIT_FAV_DOGS, ADD_FAV_DOG} from "../actionType";


export function dogsReducer (state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case INIT_FAV_DOGS: {
      return state;
    }

    case ADD_FAV_DOG: {
      return [...state, payload];
    }

    default: {
      return state;
    }
  }
}
