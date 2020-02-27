import { ofType, StateObservable, ActionsObservable, Epic } from 'redux-observable';
import { HomeActionTypes } from './home.types'
import { map, mergeMap } from 'rxjs/operators'
import axios from 'axios'
import { IHomeActionTypes, IAppState } from '../../types/AppInterfaces'
import { Observable } from 'rxjs';

export const loadEmployees: Epic<IHomeActionTypes> = (action$: ActionsObservable<IHomeActionTypes>): Observable<IHomeActionTypes> => action$.pipe (
    ofType(HomeActionTypes.FILTER_LOCATION),
    map(() => {
        return {
            type: HomeActionTypes.FETCH_EMPLOYEES_START
        };
    })
)

export const loadEmployeesAsync: Epic<IHomeActionTypes> = (action$: ActionsObservable<IHomeActionTypes>, state$: StateObservable<IAppState>): Observable<IHomeActionTypes> => action$.pipe (
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