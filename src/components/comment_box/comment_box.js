import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentBoxUI from './comment_box_ui';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CommentBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBoxUI);

export default CommentBoxContainer;