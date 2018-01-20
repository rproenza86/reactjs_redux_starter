import { 
    FETCH_USERS
}  from '../actions/actionsTypes';

export default function(state = [], action = {}) {
    switch (action.type) {
        case FETCH_USERS:
            {
                return [...state, action.payload];
            }
        default:
            {
                return state;
            }
    }
}