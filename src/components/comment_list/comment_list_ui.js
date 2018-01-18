import React, { Component } from 'react'; 

export default class CommentList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comments: props.comments || []
        };
    }

    render() {
        const listItems = this.props.comments.map(comment => (<li key={comment} >{comment}</li>));
        return ( 
            <div className="comment_list">
                <h2>Comments list:</h2>
                    <ul >
                        {listItems}
                    </ul>
            </div>
        );
    }
}