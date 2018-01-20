export default function({dispatch}) {
    return next => action => {
        // promise cast intent
        if(!action.payload || (action.payload && !action.payload.then)){
            console.log('We do not have a promise', action);
            return next(action);
        }
        // work with promises
        action.payload.then( response => {
            /**
             * create a new actions with the original type, but
             * replace the payload.promise with the promise response
             */
            const newAction = {...action, payload: response};
            console.log('We have a promise catch and processed', newAction);
            dispatch(newAction);
        });
    }
}