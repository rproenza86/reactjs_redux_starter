import React, { Component } from 'react'; 
import { Link } from 'react-router'; 
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import MenuIcon from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';

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

const iconStyles = {
    marginRight: 12
  };

class Header extends Component {
    static contextTypes = { 
        router: React.PropTypes.object
    }

    goToSignIn(){
        if(!this.props.authenticated)
            this.context.router.push('/signin');
    }

    goToSignOut(){
        if(this.props.authenticated){
            this.props.authenticate(false);
            this.context.router.push('/');
        }
    }

    authButton() {
        const { classes } = this.props;
        const authButton = this.props.authenticated === true && !this.props.authenticated.error
                            ? <Button raised className={classes.button} type="button" onClick={() => this.goToSignOut()}> 
                                <i className="fas fa-sign-out-alt"></i>
                                &nbsp; Sign Out 
                              </Button>
                            : <Button raised className={classes.button} type="button" onClick={() => this.goToSignIn()}>
                                <i className="fas fa-sign-in-alt"></i>
                                &nbsp; Sign In 
                              </Button>

        return authButton;
    }

    render() {
        const { classes } = this.props;
        return ( 
            <AppBar title="ReactJS + Redux = Prove of concepts" position="static" color="default">
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

export default withStyles({})(Header);