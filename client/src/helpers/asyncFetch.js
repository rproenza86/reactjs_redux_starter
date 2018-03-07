
import axios from 'axios';

export const get = (url, header = '') => _asyncProxy('get',{url, header}) // axios.get(url,header);

export const post = (url, payload) => _asyncProxy('post',{url, payload}) ; // axios.post(url, payload);

const _asyncProxy = (method, params) => {
    const {url, header, payload} = params;

    const preloadedState = JSON.parse(localStorage.getItem('persistedStore'));
    if(preloadedState && Object.keys(preloadedState).length) {
        const asyncActions = JSON.parse(localStorage.getItem('asyncActions')) || [];
        asyncActions.push({ method, params });
        localStorage.setItem('asyncActions',JSON.stringify(asyncActions));

        return new Promise((resolve, reject) => {
            resolve({networkProblem: 'Waiting for connectivity!'});
        });

    } else {
        if (header) {
            return axios[method](url, header);
        } else {
            return axios[method](url, payload);
        }
    }
}
