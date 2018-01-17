import React, { Component } from 'react'; 

export default class CommentList extends Component {
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