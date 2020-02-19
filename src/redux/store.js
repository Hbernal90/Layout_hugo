import {createStore, applyMiddleware} from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epics'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'

const epicMiddleware = createEpicMiddleware();

const middlewares = [logger, epicMiddleware];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export {store, persistor};