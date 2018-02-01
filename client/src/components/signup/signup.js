import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { authenticate } from '../../actions/index';

import SignupUI from './signup_ui';

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

const SignupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignupUI);

export default SignupContainer;