import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
    componentWillMount() {
        if ('serviceWorker' in navigator) {
            const appController = this;
            navigator.serviceWorker.register('/sw.js')
                .then(function(registration) {
                    if (!navigator.serviceWorker.controller) {
                        return;
                    }
    
                    if (registration.waiting) {
                        appController._updateReady(registration.waiting);
                        return;
                    }
    
                    if (registration.installing) {
                        appController._onSwInstallingHandler(registration.installing);
                        return;
                    }
    
                    registration.addEventListener('updatefound', function() {
                        appController._onSwInstallingHandler(registration.installing);
                    });
                })
                .catch(function(error) {
                    console.log('Error registering Service Worker', error);
                });
    
            // Ensure refresh is only called once.
            // This works around a bug in "force update on reload".
            var refreshing;
            navigator.serviceWorker.addEventListener('controllerchange', function() {
                if (refreshing) return;
                window.location.reload();
                refreshing = true;
            });
        } else console.log('ServiceWorker not supported.');

        document.getElementById('splash').remove();
    }

    render() {
        const [
                HeaderContainer
            ] = [ 
                    Header.Container
                ];
        return ( 
                <div className="app_shell" > 
                    <HeaderContainer/>
                    {this.props.children}
                </div>
            );
        }
    }