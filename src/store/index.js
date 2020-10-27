import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer, rootSaga } from './rootReducers';
import createSagaMiddleware from 'redux-saga';
import { reduxBatch } from "@manaflair/redux-batch";

const sagaMiddleware = createSagaMiddleware();
const middleware = [
    ...getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
      thunk: true,
    }),
    sagaMiddleware
];

const store = configureStore({
    reducer: rootReducer,
    middleware,
    enhancers: [reduxBatch]
});

sagaMiddleware.run(rootSaga);

export default store;