import React, { Component } from 'react'; 
import {connect} from 'react-redux';

class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments || ['My great first default comment']
        };
    }

    render() {
        const listItems = this.state.comments.map(comment => (<li key={comment} >{comment}</li>));
        return ( 
            <ul className="comment_list">
                {listItems}
            </ul>
        );
    }
}

/**
 * Container declaration
 */
function mapStateToProps(state){
    return {
        comments: state.comments
    }
}

export default connect(mapStateToProps)(CommentList);

// TODO: convert component in dummy cmp and create separate container