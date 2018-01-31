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
                    {this.props.children}
                </div>
            );
        }
    }