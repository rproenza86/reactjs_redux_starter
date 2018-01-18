import { SAVE_COMMENT } from '../actions/actionsTypes';


export function commentsReducer(state = [], action = {}) {
    switch (action.type) {
        case SAVE_COMMENT:
            {
                return [...state, action.payload];
            }
        default:
            {
                return state;
            }
    }
}