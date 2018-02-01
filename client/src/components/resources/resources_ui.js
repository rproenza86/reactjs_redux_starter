import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class Resources extends Component {
    componentWillMount() {
        if (this.props.authenticated === true)
            this.props.fetchApiUsersList();
    }
    
    renderUsers(user = {}, index) {
        return (
            <div className="card card-block" key={`key_${index}`}>
                <h4 className="card-title">
                    {user.username}
                </h4>
                <p className="card-text">{user.name}</p>
                <p className="card-text">{user.email}</p>
            </div>
        );
    }

    render() {
        return ( 
            <div className="resources_ui">
                <h1>Protected Resources</h1>
                <h3>Api Users List :</h3>
                {this.props.users.map(this.renderUsers)}
            </div>
        );
    }
}