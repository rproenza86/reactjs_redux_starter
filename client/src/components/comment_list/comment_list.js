import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import CommentListUI from './comment_list_ui';

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

const CommentListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentListUI);

export default CommentListContainer;