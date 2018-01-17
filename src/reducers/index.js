import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    comments: (state = [
        'New comment 1111',
        'New comment 22222',
        'New comment 33333'
    ]) => state
});

export default rootReducer;