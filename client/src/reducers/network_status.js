import { 
    APP_ONLINE,
    APP_OFFLINE,
    HIDE_NETWORK_STATUS_NOTIFICATION
}  from '../actions/actionsTypes';

const initialState = {
    isAppOnline: true,
    message: '',
    notify: false
};

export function networkStatusReducer(state = initialState, action = {}) {
    switch (action.type) {
        case APP_ONLINE:
            {
                return {
                    isAppOnline: true,
                    message: action.payload.message || '',
                    notify: action.payload.notify
                };
            }
        case APP_OFFLINE:
            {
                return {
                    isAppOnline: false,
                    message: action.payload.message || '',
                    notify: action.payload.notify
                };
            }
        case HIDE_NETWORK_STATUS_NOTIFICATION:
            {
                return {
                    ...state,
                    notify: action.payload.notify
                };
            }
        default:
            {
                return state;
            }
    }
}