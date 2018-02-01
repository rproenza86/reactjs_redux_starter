import React, { Component } from 'react'; 
import SignupForm from './signup_form';

export default class Signup extends Component {
    static contextTypes = { 
        router: React.PropTypes.object
    }

    submit = (values) => {
        console.log(values);
        this.props.authenticate(true);
        this.context.router.push('/signin'); // Go to the protected route
    }

    render() {
      return (
            <div>
                <SignupForm onSubmit={this.submit} />
            </div>
      )
    }
}
