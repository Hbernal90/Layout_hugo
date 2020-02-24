import { HomeActionTypes } from './home.types';
import { IAppState, IActionTypes } from '../../types/AppInterfaces'

const INITIAL_STATE: IAppState = {
    filters: {
        location: 'MDC',
        floor: '0',
        section: 'A'
    },
    isFetching: false,
    employeesData: []
}

const homeReducer = (state: IAppState = INITIAL_STATE, action: IActionTypes) => {
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