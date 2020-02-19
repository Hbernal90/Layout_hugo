import { HomeActionTypes } from './home.types';

const INITIAL_STATE = {
    filters: {
        location: 'MDC',
        floor: '0',
        section: 'A'
    },
    isFetching: false,
    employeesData: []
}

const homeReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case HomeActionTypes.FILTER_LOCATION:
            return {
                ...state,
                filters: action.payload
            }
        case HomeActionTypes.FETCH_EMPLOYEES_START:
            return {
                ...state,
                isFetching: true
            }
        case HomeActionTypes.FETCH_EMPLOYEES_SUCCESS:
            return {
                ...state,
                isFetching: false,
                employeesData: action.payload
            }
        case HomeActionTypes.FETCH_EMPLOYEES_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

export default homeReducer;