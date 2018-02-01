import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate, signUpUser } from '../../actions/index';

import SignupUI from './signup_ui';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        errorMessage: state.authenticated.error
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        authenticate,
        signUpUser
    };
    return bindActionCreators(actionCreators, dispatch);
};

const SignupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupUI);

export default SignupContainer;