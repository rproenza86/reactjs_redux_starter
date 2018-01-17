import React, { Component } from 'react';
import CommentBox from './comment_box/comment_box';
import CommentList from './comment_list';

export default class App extends Component {
    render() {
        const CommentListContainer = CommentList.Container;
        return ( 
                <div className="app_shell" > 
                    React simple starter 
                    <CommentListContainer/>
                    <CommentBox/>
                </div>
            );
        }
    }