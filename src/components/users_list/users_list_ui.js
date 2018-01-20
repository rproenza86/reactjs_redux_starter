import React, { Component } from 'react'; 

export default class UsersList extends Component {
    componentWillMount() {
        this.props.fetchUsers();
    }

    renderUsers(user = {}, index) {
        return (
            <div className="card card-block" key={`key_${index}`}>
                <h4 className="card-title">
                    {user.name}
                </h4>
                <p className="card-text">Cheese factory</p>
                <a className="btn btn-primary">Email</a>
            </div>
        );
    }

    render() {
        return ( 
            <div className="users_list_ui">
                <h3>Users List: </h3>
                {this.props.users.map(this.renderUsers)}
            </div>
        );
    }
}