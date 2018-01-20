import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ResourcesUI from './resources_ui';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ResourcesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResourcesUI);

export default ResourcesContainer;