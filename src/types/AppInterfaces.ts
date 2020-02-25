import { ChangeEvent } from 'react'
import { WebStorage } from 'redux-persist'
import rootReducer from '../redux/root-reducer'
import { HomeActionTypes } from '../redux/home/home.types'

export type IAppState = ReturnType<typeof rootReducer>;

export interface IHomeReduxState {
    filters: IFilters,
    isFetching: boolean,
    employeesData: IEmployeesData[],
    errorMessage?: string
}

export interface IHomeState {
    user: string,
    comboBox: {
        locations: {
            [key: string]: {
                floors: {
                    [key: string]: {
                        sections: string[]
                    },
                }
            }
        }
    }
}

export interface IHomeOptions {
    filterLocation: (filters: IFilters) => void,
    fetchEmployeesStart: () => void,
    filters: IFilters,
    employeesData: IEmployeesData[]
}

export interface ISelectButtonOptions {
    name: string;
    inputLabel: string;
    items: string[];
    handleSelect: (event: ChangeEvent<any>)=> void;
    itemsSelected: string;
}

export interface IFilters {
    location: string,
    floor: string,
    section: string
}

//IHomeActionsTypes
export interface IFilterLocationAction {
    type: typeof HomeActionTypes.FILTER_LOCATION;
    payload: IFilters
}

export interface IFetchEmployeesStartAction { 
    type: typeof HomeActionTypes.FETCH_EMPLOYEES_START
}

export interface IFetchEmployeesSuccessAction {
    type: typeof HomeActionTypes.FETCH_EMPLOYEES_SUCCESS,
    payload: IEmployeesData[]
}

export interface IFetchEmployeesFailureAction {
    type: typeof HomeActionTypes.FETCH_EMPLOYEES_FAILURE,
    payload: string
}

export type IHomeActionTypes = 
    | IFilterLocationAction
    | IFetchEmployeesStartAction
    | IFetchEmployeesSuccessAction
    | IFetchEmployeesFailureAction;

export interface IEmployeesData {
    name: string,
    project: string,
    id: number,
    location: {
        building: string,
        floor: string,
        section: string
    }
}

export interface IPersistConf {
    key: string;
    storage: WebStorage;
    whitelist: [];
}