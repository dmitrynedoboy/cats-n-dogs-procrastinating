import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension'
import { rootReducer } from './reducers/root.reducer';

const initState = {
  card: {},
  cats: [],
  dogs: []
}

export const store = createStore(rootReducer, initState, composeWithDevTools(applyMiddleware(thunk)))
