import {createStore, applyMiddleware, Store, Middleware } from 'redux'
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epics'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'
import { IAppState, IAppActions } from '../types/AppInterfaces'

const epicMiddleware = createEpicMiddleware<IAppActions>();

const middlewares = [logger as Middleware, epicMiddleware as EpicMiddleware<IAppActions>];

const store: Store<IAppState> = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export {store, persistor};
