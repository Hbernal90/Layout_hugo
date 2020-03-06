import { LayoutActionTypes } from './layout.types';

import { ILayoutReduxState, ILayoutActionTypes } from '../../types/AppInterfaces';

const INITIAL_STATE: ILayoutReduxState = {
    board: [
        [
            {
                chair: false
            }
        ]
    ]
}

const LayoutReducer = (state = INITIAL_STATE, action: ILayoutActionTypes): ILayoutReduxState => {
    switch (action.type) {
        case LayoutActionTypes.ADD_TO_LAYOUT:
            return {
                ...state,
                board: action.payload
            };
        case LayoutActionTypes.REMOVE_FROM_LAYOUT:
            return {
                ...state,
                board: action.payload
            };
        case LayoutActionTypes.ADD_CHAIR:
            return {
                ...state,
                board: action.payload
            }
        case LayoutActionTypes.REMOVE_CHAIR:
            return {
                ...state,
                board: action.payload
            }
        default:
            return state;
    }
}

export default LayoutReducer;