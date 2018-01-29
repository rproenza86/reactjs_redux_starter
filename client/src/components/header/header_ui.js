import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui/Menu';

const styles = {
    root: {
      width: '100%',
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
};

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
        const { classes } = this.props;
        return ( 
            <AppBar position="static" color="default">
                <Toolbar>
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
                                <Link to="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                {this.authButton()}
                            </li>
                        </ul>
                    </nav>
                </Toolbar>
            </AppBar>
        );
    }
}