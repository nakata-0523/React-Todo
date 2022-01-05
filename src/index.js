import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux'; //redux-thunkはミドルウェアそれを適用させるため→applyMiddleware
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'  //関数を返すことができるようになる

import './index.css';
import Events_index from './components/events_index';
import reportWebVitals from './reportWebVitals';
import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={ store }>
    <Events_index />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
