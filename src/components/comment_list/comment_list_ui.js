import React, { Component } from 'react'; 

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
        return ( 
            <div className="comment_list">
                <h3>Comments list:</h3>
                    <ul >
                        {listItems}
                    </ul>
            </div>
        );
    }
}