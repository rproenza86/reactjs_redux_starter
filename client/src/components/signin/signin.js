import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate, signinUser } from '../../actions/index';

import SigninUI from './signin_ui';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        errorMessage: state.authenticated.error
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        authenticate,
        signinUser
    };
    return bindActionCreators(actionCreators, dispatch);
};

const SigninContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SigninUI);

export default SigninContainer;