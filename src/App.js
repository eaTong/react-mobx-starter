import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {Provider} from 'mobx-react';
import TodoState from './stores/Todo';

const stores = {
  todo: new TodoState()
};

import HomePage from './views/HomePage';
import TodoPage from './views/TodoPage';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router history={browserHistory}>
          <Route path="/">
            <IndexRoute component={HomePage}/>
            <Route path="todo" component={TodoPage}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}
