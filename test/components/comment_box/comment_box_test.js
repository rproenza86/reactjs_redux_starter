import { renderComponent, expect } from '../../test_helper';
import CommentBox from '../../../src/components/comment_box/comment_box';

describe('CommentBox', () => {
    let component;

    beforeEach(() => {
        component = renderComponent(CommentBox);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment_box');
    });

    it('has a text areas', () => {
        expect(component.find('textarea')).to.exist;
    });

    it('has a button', () => {
        expect(component.find('button')).to.exist;
    });

});