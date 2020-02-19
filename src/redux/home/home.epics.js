import { ofType } from 'redux-observable';
import { HomeActionTypes } from './home.types'
import { mergeMap, map } from 'rxjs/operators'
import axios from 'axios'

/* export const loadEmployees = (action$) => action$.pipe (
    ofType(HomeActionTypes.FILTER_LOCATION),
    map(() => {
        return {
            type: HomeActionTypes.FETCH_EMPLOYEES_START
        };
    })
) */

export const loadEmployeesAsync = (action$, state$) => action$.pipe (
    ofType(HomeActionTypes.FETCH_EMPLOYEES_START),
    mergeMap(async () => {
        try {
            const res = await axios.get('https://layout-api.firebaseapp.com/employees');
            const employeesData = res.data;
            console.log(employeesData)
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