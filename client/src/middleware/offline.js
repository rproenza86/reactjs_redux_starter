import { APP_ONLINE, APP_OFFLINE } from '../actions/actionsTypes';

export default function({dispatch, getState}) {
    return next => action => {
        next(action);

        switch (action.type) {
            case APP_OFFLINE: {
                localStorage.setItem('persistedStore',JSON.stringify(getState()))
                break;
            }
            case APP_ONLINE: {
                localStorage.setItem('persistedStore',JSON.stringify({}))
                break;
            }
        }
    }
}