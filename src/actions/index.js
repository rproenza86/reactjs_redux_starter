import { 
    SAVE_COMMENT,
    CHANGE_AUTH
} from './actionsTypes';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};

export const authenticate = (isLoggedIn = false) => {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    };
};