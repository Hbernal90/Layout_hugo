import { ofType, StateObservable, ActionsObservable } from 'redux-observable';
import { HomeActionTypes } from './home.types'
import { map, mergeMap } from 'rxjs/operators'
import axios from 'axios'
import { IActionTypes, IAppState } from '../../types/AppInterfaces'

export const loadEmployees = (action$: ActionsObservable<IActionTypes>) => action$.pipe (
    ofType(HomeActionTypes.FILTER_LOCATION),
    map(() => {
        return {
            type: HomeActionTypes.FETCH_EMPLOYEES_START
        };
    })
)

export const loadEmployeesAsync = (action$: ActionsObservable<IActionTypes>, state$: StateObservable<IAppState>) => action$.pipe (
    ofType(HomeActionTypes.FETCH_EMPLOYEES_START),
    mergeMap(async () => {
        try {
            const res = await axios.get('https://layout-api.firebaseapp.com/employees');
            const employeesData = res.data;
            return {
                type: HomeActionTypes.FETCH_EMPLOYEES_SUCCESS,
                payload: employeesData,
            };
        } catch (err) {
            return {
                type: HomeActionTypes.FETCH_EMPLOYEES_FAILURE,
                payload: err.message,
            };
        }
    })
)