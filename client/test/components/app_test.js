import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

describe('App', () => { // use 'describe' to group similar tests
    let component;

    beforeEach(() => {
        component = renderComponent(App);
    });

    it('renders something', () => { // use 'it' to test a single attribute of a target
        expect(component).to.exist; // use 'expect' to make an 'assertion' about a target
    });

    it('correct class name', () => {
        expect(component).to.have.class('app_shell');
    });

    it('show the correct text', () => {
        expect(component).to.contain('React simple starter');
    });

    // it('shows a comment box', () => {
    //   expect(component.find('.comment_box')).to.exist;
    // });

    // it('show a comment list', () => {
    //   expect(component.find('.comment_list')).to.exist;
    // });
    // TODO: Create test based on routes.
});