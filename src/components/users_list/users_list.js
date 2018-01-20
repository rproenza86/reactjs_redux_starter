import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../../actions/index';

import UsersListUI from './users_list_ui';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        users: state.users
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        fetchUsers
    };
    return bindActionCreators(actionCreators, dispatch);
};

const UsersListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(UsersListUI);

export default UsersListContainer;