import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ServicesUI from './services_ui';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const ServicesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(ServicesUI);

export default ServicesContainer;