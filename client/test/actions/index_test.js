import { expect } from '../test_helper';
import { saveComment } from '../../src/actions';
import { SAVE_COMMENT } from '../../src/actions/actionsTypes';

describe('Actions', () => {
    describe('save comment', () => {
        const comment = 'Comment to test actions';
        let action = {};

        beforeEach(() => {
            action = saveComment(comment);
        });

        it('has the correct type', () => {
            expect(action.type).equal(SAVE_COMMENT);
        });

        it('has the correct payload', () => {
            expect(action.payload).equal(comment);
        });
    });
});