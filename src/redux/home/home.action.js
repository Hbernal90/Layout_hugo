import { HomeActionTypes } from './home.types';

export const filterLocation = filters => ({
    type: HomeActionTypes.FILTER_LOCATION,
    payload: filters
});