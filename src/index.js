import ReactDOM from 'react-dom';
import React from 'react';
// import { select } from 'async';
// import { throwStatement } from '@babel/types';
import App from './App'

ReactDOM.render(
  <App/>, document.getElementById('root')
)
if (module.hot){
  module.hot.accept()
}