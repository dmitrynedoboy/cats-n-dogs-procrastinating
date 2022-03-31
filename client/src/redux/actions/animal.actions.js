import { INIT_FAV_CATS, ADD_FAV_CAT, INIT_FAV_DOGS, ADD_FAV_DOG } from "../actionType";


const addFavAnimalAction = (type, animal) => ({
    type,
    payload: animal,
})

export const addFavAnimal = (animal) => (dispatch) => {
  const likedAnimal = {...animal, status: true}
  switch (animal.type) {
    case 'cat': {
      dispatch(addFavAnimalAction(ADD_FAV_CAT, likedAnimal))
      break;
    }
    case 'dog': {
      dispatch(addFavAnimalAction(ADD_FAV_DOG, likedAnimal))
      break;
    }
    default: {
      return console.log('Something went wrong');;
    }
  }
}
