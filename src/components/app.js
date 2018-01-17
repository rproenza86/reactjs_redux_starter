import React, { Component } from 'react';
import CommentBox from './comment_box/comment_box';
import CommentList from './comment_list/comment_list';

export default class App extends Component {
    render() {
        return ( 
                <div className="app_shell" > 
                    React simple starter 
                    <CommentList/>
                    <CommentBox/>
                </div>
            );
        }
    }