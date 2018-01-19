import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 
import { Router, Route, browserHistory } from 'react-router'; 

import App from './components/app';
import Services from './components/services';
import Resources from './components/resources';
import Comments from './components/comment_list';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers,/* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="services" component={Services.UI}/>
        <Route path="resources" component={Resources.Container}/>
        <Route path="comments" component={Comments.Container}/>
      </Route>
    </Router>  
  </Provider>
  , document.querySelector('.container'));
