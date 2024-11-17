import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { getFullYear, getFooterCopy } from './utils';
import { Notifications } from "./Notifications"

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Notifications />, document.getElementById("root-notifications"));
