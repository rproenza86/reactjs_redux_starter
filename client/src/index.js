import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import { Router, Route, browserHistory, IndexRoute } from 'react-router'; 
import reducers from './reducers';
import Async from './middleware/async';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Reboot from 'material-ui/Reboot';
import ReduxThunk from 'redux-thunk'; // Redux middleware
import Auth from './middleware/auth';
import { authenticate } from './actions'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

import App from './components/app';
import Services from './components/services';
import Resources from './components/resources';
import Users from './components/users_list';
import requeiredAuth from './components/common/require_auth';
import Comments from './components/comment_list';
import SignIn from './components/signin';
import SignUp from './components/signup';
import Home from './components/home';

const createStoreWithMiddleware = applyMiddleware(Async, ReduxThunk, Auth)(createStore);
const store = createStoreWithMiddleware(reducers,/* preloadedState, */
                                        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const token = localStorage.getItem('token');
if (token) {
  store.dispatch(authenticate(true));
}

ReactDOM.render(
  <MuiThemeProvider theme={theme} >
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/> 
          <Route path="services" component={Services.UI}/>
          <Route path="resources" component={ requeiredAuth(Resources.Container) }/>
          <Route path="comments" component={Comments.Container}/>
          <Route path="users" component={Users.Container}/>
          <Route path="signin" component={SignIn.Container}/>
          <Route path="signup" component={SignUp.Container}/>
        </Route>
      </Router>  
    </Provider>
  </MuiThemeProvider>
  , document.querySelector('.container'));
