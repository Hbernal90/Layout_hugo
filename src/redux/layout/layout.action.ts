import { LayoutActionTypes } from './layout.types';

import { IBoard } from '../../types/AppInterfaces';

export const addToLayout = (layout: Array<IBoard> ) => ({
    type: LayoutActionTypes.ADD_TO_LAYOUT,
    payload: layout
})

export const removeFromLayout = (layout: Array<IBoard>) => ({
    type: LayoutActionTypes.REMOVE_FROM_LAYOUT,
    payload: layout
})

export const addChairToLayout = (layout: Array<IBoard>) => ({
    type: LayoutActionTypes.ADD_CHAIR,
    payload: layout
})

export const removeChairFromLayout = (layout: Array<IBoard>) => ({
    type: LayoutActionTypes.REMOVE_CHAIR,
    payload: layout
})
