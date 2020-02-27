import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';
import layoutReducer from './layout/layouts.reducer';
import { IPersistConf, IRootReducerType } from '../types/AppInterfaces'

const persistConfig: IPersistConf = {
    key: 'root',
    storage,
    whitelist: []
}

// TODO
const rootReducer : IRootReducerType = combineReducers({home: homeReducer, layout: layoutReducer});

export default persistReducer(persistConfig, rootReducer);
