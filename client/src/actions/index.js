import { 
    SAVE_COMMENT,
    CHANGE_AUTH,
    FETCH_USERS,
    SIGNIN_USER,
    AUTH_ERROR
} from './actionsTypes';
import axios from 'axios';
import config from '../config/main';
import { urlBuilder } from '../common/utils';
import { browserHistory } from 'react-router';

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

/**
 * Because the introduction of redux-thunk now the action return a function instead of an object
 * 
 * My goal here is to create an action whit certain business logic an dispatch other actions accordingly
 * 
 * @param {email, password} 
 */
export const signinUser = ({ username, password }) => {
    return function(dispatch) {
        const api_root_url =  urlBuilder(config.apiServer);

        axios.post(`${api_root_url}/users/signin`, { username, password })
            .then( response => {
                const isSuccessResponse = response && response.data && response.data.success === true;
                
                if (isSuccessResponse) {
                    localStorage.setItem('token', response.data.token);
                    dispatch(authenticate(true));
                    browserHistory.push('/resources'); // Best practice to interact with the react-router component instead of access it using the context
                }
            })
            .catch(()=> {
                dispatch(authError('Incorrect Login Information.'));
            });
    }
};

export const authError = (error = '') => {
    return {
        type: AUTH_ERROR,
        payload: error
    };
};