import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import HeaderUI from './header_ui';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const HeaderContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(HeaderUI);

export default HeaderContainer;