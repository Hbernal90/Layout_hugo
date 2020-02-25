import { HomeActionTypes } from './home.types';
import { IHomeActionTypes, IHomeReduxState } from '../../types/AppInterfaces'

const INITIAL_STATE: IHomeReduxState = {
    filters: {
        location: 'MDC',
        floor: '0',
        section: 'A'
    },
    isFetching: false,
    employeesData: []
}

const homeReducer = (state = INITIAL_STATE, action: IHomeActionTypes): IHomeReduxState  => {
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