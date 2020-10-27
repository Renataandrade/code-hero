import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

import * as characters from './ducks/character';

const reducers = combineReducers({
  characters: characters.reducer,
})

export const rootReducer = (state, action) => {
  return reducers(state, action);
}

export function* rootSaga() {
  yield all([
    characters.saga(),
  ]);
}