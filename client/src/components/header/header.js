import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../actions/index';

import HeaderUI from './header_ui';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        authenticate
    };
    return bindActionCreators(actionCreators, dispatch);
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderUI);

export default HeaderContainer;