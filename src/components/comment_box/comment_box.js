import React, { Component } from 'react';

export default class CommentBox extends Component {

    render() {
            return ( 
                <div className="comment_box">
                    <textarea name="comment_box_textarea" id="" cols="30" rows="10"></textarea>
                    <button>Submit comment</button>
                </div>
            );
        }
    }