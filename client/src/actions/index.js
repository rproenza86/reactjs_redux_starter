import { 
    SAVE_COMMENT,
    CHANGE_AUTH,
    FETCH_USERS
} from './actionsTypes';
import axios from 'axios';

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
    const usersList = axios.get('https://jsonplaceholder.typicode.com/users'); // This will return a promise, so we need a middleware to handle the promise
    return {
        type: FETCH_USERS,
        payload: usersList
    };
};