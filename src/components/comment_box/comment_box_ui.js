import React, { Component } from 'react';

export default class CommentBox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            comment: ''
        };
    }

    _onChangeHandler(event){
        this.setState({
            comment: event.target.value
        });
    }

    _onSubmitHandler(event){
        event.preventDefault();
        this.props.saveComment(this.state.comment);
        this.setState({
            comment: ''
        });
    }

    render() {
            return ( 
                <form className="comment_box" onSubmit={this._onSubmitHandler.bind(this)}>
                    <textarea 
                        name="comment_box_textarea" 
                        id="app_comment_box_textarea" 
                        cols="30" 
                        rows="10"
                        value={this.state.comment}
                        onChange={this._onChangeHandler.bind(this)}
                    />
                    <button>Submit comment</button>
                </form>
            );
        }
    }