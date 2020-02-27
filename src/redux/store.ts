import {createStore, applyMiddleware, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epics'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'
import { IAppState } from '../types/AppInterfaces'

const epicMiddleware = createEpicMiddleware();

const middlewares = [logger, epicMiddleware];

const store: Store<IAppState> = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export {store, persistor};
