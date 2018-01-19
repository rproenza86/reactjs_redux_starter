import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class Resources extends Component {
    constructor(props) {
        super(props);
    }

    authButton() {
        return <button>Sign In</button>;
    }

    render() {
        return ( 
            <div className="resources_ui">
                <h1>Resources</h1>
            </div>
        );
    }
}