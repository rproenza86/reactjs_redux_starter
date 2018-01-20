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
        render () {
            console.log(this.props.authenticated);
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