import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class Services extends Component {
    constructor(props) {
        super(props);
    }

    authButton() {
        return <button>Sign In</button>;
    }

    render() {
        return ( 
            <div className="services_ui">
                <h1>Services</h1>
            </div>
        );
    }
}