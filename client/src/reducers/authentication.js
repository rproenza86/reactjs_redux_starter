import { 
    CHANGE_AUTH,
    AUTH_ERROR
}  from '../actions/actionsTypes';

export function authenticationReducer(state = false, action = {}) {
    switch (action.type) {
        case CHANGE_AUTH:
            {
                return action.payload;
            }
        case AUTH_ERROR:
            {
                console.log(action)
                return {error: action.payload};
            }
        default:
            {
                return state;
            }
    }
}