import React, { Component } from 'react'; 
import SigninForm from './signin_form';

export default class Signin extends Component {
    submit = (values) => {
        console.log(values);
    }
    render() {
      return (
        <SigninForm onSubmit={this.submit} />
      )
    }
}
