import { HomeActionTypes } from './home.types';
import { IFilters, IEmployeesData, IHomeActionTypes } from '../../types/AppInterfaces'

export const filterLocation = (filters: IFilters): IHomeActionTypes => ({
    type: HomeActionTypes.FILTER_LOCATION,
    payload: filters
});

export const fetchEmployeesStart = (): IHomeActionTypes => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_START
});

export const fetchEmployeesSuccess = (employeesData: IEmployeesData[] ): IHomeActionTypes => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: employeesData
});

export const fetchEmployeesFailure = (errorMessage: string): IHomeActionTypes => ({
    type: HomeActionTypes.FETCH_EMPLOYEES_FAILURE,
    payload: errorMessage
});