import React from 'react';
import  ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import ReduxPromise from 'redux-promise'
import throttle from 'lodash/throttle'
import { loadState, saveState } from './utils/local_storage/localStorage'
import styles from './styles/scss/styles.scss'

import App from './components/App.js'
import GiftyApp from './components/GiftyApp.js'
import GiftyForm from './components/gifty/GiftyForm.js'
import GiftyGenerated from './components/gifty/GiftyGenerated.js'
import SettingsView from './components/settings/SettingsView.js'
import HistoryView from './components/history/HistoryView.js'
import ProfileView from './components/profile/ProfileView.js'
import Login from './components/Login.js'
import FriendListView from './components/friends/FriendList.js'
import NotFound from './components/NotFound.js'


const persistedState = loadState();

const store = createStore(
  reducers,
  persistedState,
  compose(
    applyMiddleware(ReduxPromise),
    applyMiddleware(thunk)
  )
)

store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

ReactDOM.render(<Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={GiftyApp}></IndexRoute>
      <Route path="app" component={GiftyForm}></Route>
        <IndexRoute component={GiftyForm}></IndexRoute>
        <Route path="generated" component={GiftyGenerated}></Route>
      <Route path="login" component={Login}></Route>
      <Route path="profile" component={ProfileView}></Route>
      <Route path="settings" component={SettingsView}></Route>
      <Route path="history" component={HistoryView}></Route>
      <Route path="friends" component={FriendListView}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>
</Provider>, document.getElementById('app'));
