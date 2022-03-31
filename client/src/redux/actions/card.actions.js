import { CATS_PATH, DOGS_PATH } from "../../utils/animals.path";
import { INIT_CARD } from "../actionType";


export const initCard = (animal) => ({
    type: INIT_CARD,
    payload: animal,
});

export const getAnimalFromApi = (animalPath) => (
  fetch(`https://api.the${animalPath}api.com/v1/images/search?size=full`)
    .then((responseApi) => responseApi.json())
)


export const initCardFromApi = (animal) => (dispatch) => {
  switch (animal) {
    case CATS_PATH: {
      getAnimalFromApi(animal)
        .then(([cat]) => dispatch(initCard({ id:cat.id, url:cat.url, type: 'cat',  status: null })))
        .catch((error) => console.error(error));
      break;
    }

    case DOGS_PATH: {
      getAnimalFromApi(animal)
        .then(([dog]) => dispatch(initCard({ id:dog.id, url:dog.url, type: 'dog', status: null })))
        .catch((error) => console.error(error));
      break;
    }

    default: {
      return 'smth went wrong in card reducer';
    }
  }
}
