import { 
    CHANGE_AUTH
}  from '../actions/actionsTypes';

export function authenticationReducer(state = false, action = {}) {
    switch (action.type) {
        case CHANGE_AUTH:
            {
                return action.payload;
            }
        default:
            {
                return state;
            }
    }
}