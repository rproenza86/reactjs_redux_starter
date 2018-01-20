import { 
    SAVE_COMMENT,
    CHANGE_AUTH,
    FETCH_USERS
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

export const fetchUsers = (users = []) => {
    const mockUsers = [
        {name: 'Pepe'},
        {name: 'Pipa'},
        {name: 'Pipe'}
    ];
    return {
        type: FETCH_USERS,
        payload: mockUsers
    };
};