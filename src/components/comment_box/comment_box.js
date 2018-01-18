import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { saveComment } from '../../actions/index';

import CommentBoxUI from './comment_box_ui';

const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    const actionCreators = {
        saveComment
    };
    return bindActionCreators(actionCreators, dispatch);
};

const CommentBoxContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentBoxUI);

export default CommentBoxContainer;