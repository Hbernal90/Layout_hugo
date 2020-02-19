import { HomeActionTypes } from './home.types';

export const filterLocation = filters => ({
    type: HomeActionTypes.FILTER_LOCATION,
    payload: filters
});

export const fetchEmployeesStart = () => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_START
});

export const fetchEmployeesSuccess = employeesData => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: employeesData
});

export const fetchEmployeesFailure = errorMessage => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_FAILURE,
    payload: errorMessage
});