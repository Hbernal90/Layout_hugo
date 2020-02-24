//import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';
import { IPersistConf } from '../types/AppInterfaces'

const persistConfig: IPersistConf = {
    key: 'root',
    storage,
    whitelist: []
}

// TODO
//const rootReducer = combineReducers({home: homeReducer,});

export default persistReducer(persistConfig, homeReducer);