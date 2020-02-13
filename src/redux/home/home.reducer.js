import { HomeActionTypes } from './home.types';

const INITIAL_STATE = {
    filters: {
        location: 'MDC',
        floor: '0',
        section: 'A'
    }
}

const homeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HomeActionTypes.FILTER_LOCATION:
            return {
                ...state,
                filters: action.payload
            }
    }
}

export default homeReducer;