import React, { Component } from 'react'; 
import CommentBox from './../comment_box';

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments || []
        };
    }

    render() {
        const listItems = this.props.comments.length 
                            ? this.props.comments.map(comment => (<li key={comment} >{comment}</li>))
                            : <li>No comments</li>;
        const CommentBoxContainer = CommentBox.Container;
        return ( 
            <div className="comment_list">
                <CommentBoxContainer/>
                <h3>Comments list:</h3>
                    <ul >
                        {listItems}
                    </ul>
            </div>
        );
    }
}