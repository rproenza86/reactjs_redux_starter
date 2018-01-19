import React, { Component } from 'react';
import CommentBox from './comment_box';
import CommentList from './comment_list';
import Header from './header';

export default class App extends Component {
    render() {
        const [
                CommentListContainer, 
                CommentBoxContainer,
                HeaderContainer
            ] = [ 
                    CommentList.Container,
                    CommentBox.Container,
                    Header.Container
                ];
        return ( 
                <div className="app_shell" > 
                    <HeaderContainer/>
                    <br/>  
                    <h1>React simple starter </h1>    
                    <CommentListContainer/>
                    <CommentBoxContainer/>
                </div>
            );
        }
    }