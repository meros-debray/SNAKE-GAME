import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import gameReducer from "./reducers";
import watcherSaga from "./sagas";
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: gameReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Add the redux-saga middleware to the default redux-toolkit middlewares
});

sagaMiddleware.run(watcherSaga);

export default store;
