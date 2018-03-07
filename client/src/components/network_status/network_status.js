import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import NetworkStatusUI from './network_status_ui';
import { hideNetworkStatusNotification } from '../../actions/index';


const mapStateToProps = (state) => {
    return {
        network_status: state.network_status
    };
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = { hideNetworkStatusNotification };
    return bindActionCreators(actionCreators, dispatch);
};

const NetworkStatusContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NetworkStatusUI);

export default NetworkStatusContainer;