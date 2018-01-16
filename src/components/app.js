import React, { Component } from 'react';

export default class App extends Component {
    sum (num1 = 1, num2 = 2) {
      return num1 + num2;
    }

    render() {
        return ( <div className="app_shell" > React simple starter </div>);
        }
    }