import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/actionsTypes';
import { commentsReducer } from '../../src/reducers/comments';

describe('Comments reducers', () => {
    const comment = [];
    const initialState = { comment };
    let state = {};

    beforeEach(() => {
        state = commentsReducer(initialState);
    });

    it('handles action with unknown type', () => {
        expect(commentsReducer()).to.be.instanceOf(Array);
    });

    it('handles action of type SAVE_COMMENT', () => {
        const action = {
            type: SAVE_COMMENT,
            payload: 'The brand new comment'
        }
        expect(commentsReducer([], action)).to.eql(['The brand new comment']);
    });
});