import { combineReducers } from 'redux';
import { commentsReducer } from './comments';
import { authenticationReducer } from './authentication';
import usersReducer from './users';

const rootReducer = combineReducers({
    comments: commentsReducer,
    authenticated: authenticationReducer,
    users: usersReducer
});

export default rootReducer;