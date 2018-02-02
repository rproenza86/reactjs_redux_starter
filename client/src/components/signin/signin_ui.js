import React, { Component } from 'react'; 
import SigninForm from './signin_form';

export default class Signin extends Component {
    static contextTypes = { 
        router: React.PropTypes.object
    }

    submit = (values) => {
        this.props.signinUser(values);
    }

    signup = () => {
        this.context.router.push('/signup');
    }

    renderAlert () {
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>Sorry! </strong>
                    { this.props.errorMessage }
                </div> 
            );
        }
    }

    render() {
      return (
            <div>
                {this.renderAlert()}
                <SigninForm onSubmit={this.submit} handleSignup={this.signup}/>
            </div>
      )
    }
}
