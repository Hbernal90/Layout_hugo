import {createStore, applyMiddleware, Store, Action, Middleware } from 'redux'
import { createEpicMiddleware, EpicMiddleware } from 'redux-observable';
import { rootEpic } from './root-epics'
import rootReducer from './root-reducer'
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'
import { IAppState } from '../types/AppInterfaces'

const epicMiddleware: EpicMiddleware<Action<any>, Action<any>, void, any> = createEpicMiddleware();

const middlewares: (Middleware | EpicMiddleware<Action<any>, Action<any>, void, any>)[] = [logger, epicMiddleware];

const store: Store<IAppState> = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

epicMiddleware.run(rootEpic);

export {store, persistor};
