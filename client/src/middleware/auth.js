import { CHANGE_AUTH } from '../actions/actionsTypes';

export default function({dispatch}) {
    return next => action => {
        next(action);

        switch (action.type) {
            case CHANGE_AUTH: {
                if (action.payload === false)
                    localStorage.removeItem('token');
                break;
            }
        }
    }
}