import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
    render() {
        const [
                HeaderContainer
            ] = [ 
                    Header.Container
                ];
        return ( 
                <div className="app_shell" > 
                    <HeaderContainer/>
                    <br/>  
                    <h1>React simple starter </h1>  
                    {this.props.children}
                </div>
            );
        }
    }