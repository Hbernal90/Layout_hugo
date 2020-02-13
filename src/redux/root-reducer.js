import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import  homeReducer from './home/home.reducer';

const persystConfig = {
    key: 'root',
    storage,
    whitelist: []
}

const rootReducer = combineReducers({home: homeReducer})

export default persistReducer(persystConfig, rootReducer);
