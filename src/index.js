import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //redux-thunkはミドルウェアそれを適用させるため→applyMiddleware
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'  //関数を返すことができるようになる
import { BrowserRouter, Route, Switch } from 'react-router-dom'  //リンクの機能

import './index.css';
import EventsIndex from './components/events_index';
import EventsNew from './components/events_new';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';
//        <Route exact path="/events/new" component={ EventsNew } />

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={ EventsNew } />
        <Route exact path="/" component={ EventsIndex } />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
