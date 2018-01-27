import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../actions/index';

import SigninUI from './signin_ui';

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

const SigninContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninUI);

export default SigninContainer;