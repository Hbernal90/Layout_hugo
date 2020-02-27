import { combineEpics, Epic } from 'redux-observable';
import {loadEmployees, loadEmployeesAsync } from './home/home.epics';
import { IHomeActionTypes } from '../types/AppInterfaces';

export const rootEpic: Epic<IHomeActionTypes> = combineEpics(loadEmployees, loadEmployeesAsync);