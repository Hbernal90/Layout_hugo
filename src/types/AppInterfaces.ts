import { ChangeEvent } from 'react'
import { WebStorage } from 'redux-persist'

export interface IAppState {
    filters: IFilters,
    isFetching: boolean,
    employeesData: IEmployeesData[]
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

export interface IActionTypes {
    type: string,
    payload: any
}

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