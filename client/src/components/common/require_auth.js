import React, {Component} from 'react';
import { connect } from 'react-redux';
/**
 * This is a higher-order component (HOC), an advanced technique in React for reusing component logic.
 *  HOCs are not part of the React API, per se. They are a pattern that emerges from React’s compositional nature.
 * 
 * Doc. Ref.: https://reactjs.org/docs/higher-order-components.html
 */

export default function(ComposedComponent) {
    class Authentication extends Component {
        static contextTypes = { // context pass data through the component tree without having to pass the props down manually at every level. Doc. Ref.: https://reactjs.org/docs/context.html
            router: React.PropTypes.object
        }

        componentWillMount() {
            if(!this.props.authenticated)
                this.context.router.push('/');
        }

        componentWillUpdate(nextProps) {
            if(!nextProps.authenticated)
                this.context.router.push('/');
        }

        render () {
            return <ComposedComponent {...this.props}/>
        }
    }

    function mapStateToProps(state) {
        return {
            authenticated: state.authenticated
        };
    };
    
    return connect(mapStateToProps)(Authentication);
}