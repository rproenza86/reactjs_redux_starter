import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';

export default class App extends Component {
    render() {
        const CommentListContainer = CommentList.Container;
        const CommentBoxContainer = CommentBox.Container;
        return ( 
                <div className="app_shell" > 
                    <h1>React simple starter </h1>    
                    <CommentListContainer/>
                    <CommentBoxContainer/>
                </div>
            );
        }
    }