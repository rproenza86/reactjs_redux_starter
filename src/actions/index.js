import { SAVE_COMMENT } from './actionsTypes';

export const saveComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    };
};