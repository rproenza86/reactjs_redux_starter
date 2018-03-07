import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { authenticationReducer } from './authentication';
import usersReducer from './users';
import apiUsersReducer from './api_users';
import { networkStatusReducer } from './network_status';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
    comments: commentsReducer,
    authenticated: authenticationReducer,
    users: usersReducer,
    form: formReducer,
    api_users: apiUsersReducer,
    network_status: networkStatusReducer
});

export default rootReducer;