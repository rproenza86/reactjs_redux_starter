import React, { Component } from 'react'; 
import Snackbar from 'material-ui/Snackbar';

export default class NetworkStatusUI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            message: ''
        };
    }

    handleRequestClose = () => {
        this.props.hideNetworkStatusNotification();
    };

    render() {
        const network_status = this.props.network_status;

        if(network_status.notify){
            window.setTimeout(this.handleRequestClose, 3000);

            return (  <Snackbar
                            open={network_status.notify}
                            message={network_status.message}
                            autoHideDuration={2000}
                            onRequestClose={this.handleRequestClose}
                        />);
        } else {
            return <div></div>;
        }

    }
}