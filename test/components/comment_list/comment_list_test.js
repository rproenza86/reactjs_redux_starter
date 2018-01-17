import { renderComponent, expect } from '../../test_helper';
import CommentList from '../../../src/components/comment_list/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = {
            comments: [
                'New comment 1',
                'New comment 2',
                'New comment 3'
            ]
        }
        component = renderComponent(CommentList, null, props);
    });

    it('has the correct class', () => {
        expect(component).to.have.class('comment_list');
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(3);
    });

    it('shows each comment that is provider', () => {
        expect(component).to.contain('New comment 1');
        expect(component).to.contain('New comment 2');
        expect(component).to.contain('New comment 3');
    });
});