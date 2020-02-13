import { HomeActionTypes } from './home.types';

const INITIAL_STATE = {
    filters: {
        location: 'MDC',
        floor: '0',
        section: 'A'
    },
    get currentImage() {
        return `${this.filters.location}-${this.filters.floor}-${this.filters.section}`
    }
}

export const homeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HomeActionTypes.FILTER_LOCATION:
            return {
                ...state,
                filters: action.payload
            }
    }
}

