import { combineEpics } from 'redux-observable';
import {loadEmployees, loadEmployeesAsync } from './home/home.epics';

export const rootEpic = combineEpics(loadEmployees, loadEmployeesAsync);