import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    authButton() {
        const authButton = this.props.authenticated 
                            ?  <button onClick={() => this.props.authenticate(false)}>Sign Out</button> 
                            : <button onClick={() => this.props.authenticate(true)}>Sign In</button>

        return authButton;
    }

    render() {
        return ( 
            <nav className="nav navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/resources">Resources</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/comments">Comments</Link>
                    </li>
                    <li className="nav-item">
                        {this.authButton()}
                    </li>
                </ul>
            </nav>
        );
    }
}