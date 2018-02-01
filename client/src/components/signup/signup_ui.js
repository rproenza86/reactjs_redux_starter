import React, { Component } from 'react'; 
import SignupForm from './signup_form';

export default class Signup extends Component {
    static contextTypes = { 
        router: React.PropTypes.object
    }

    submit = (formValues) => {
        this.props.signUpUser(formValues);
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
                <SignupForm onSubmit={this.submit} />
            </div>
      )
    }
}
