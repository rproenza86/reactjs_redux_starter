import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchApiUsersList } from '../../actions/index';

import ResourcesUI from './resources_ui';

const mapStateToProps = (state) => {
    return {
        authenticated: state.authenticated,
        users: state.api_users,
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        fetchApiUsersList
    };
    return bindActionCreators(actionCreators, dispatch);
};

const ResourcesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourcesUI);

export default ResourcesContainer;