import React, { Component } from 'react'; 
import SigninForm from './signin_form';

export default class Signin extends Component {
    static contextTypes = { 
        router: React.PropTypes.object
    }

    submit = (values) => {
        console.log(values);
        this.props.authenticate(true);
        this.context.router.push('/resources'); // Go to the protected route
    }

    render() {
      return (
            <div>
                <SigninForm onSubmit={this.submit} />
            </div>
      )
    }
}
