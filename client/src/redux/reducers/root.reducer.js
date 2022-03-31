import { combineReducers } from 'redux'
import { cardReducer } from './card.reducer'
import { catsReducer } from './cats.reducer'
import { dogsReducer } from './dogs.reducer'

export const rootReducer = combineReducers({
  card: cardReducer,
  cats: catsReducer,
  dogs: dogsReducer
})
