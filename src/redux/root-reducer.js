import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import homeReducer from './home/home.reducer';

const persistConfig = {
    key: 'filters',
    storage,
    whitelist: ['home']
}

// TODO
//const rootReducer = combineReducers({home: homeReducer})

export default persistReducer(persistConfig, homeReducer);
