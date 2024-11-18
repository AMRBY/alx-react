import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
import Notifications from "./Notifications";

const root = createRoot(document.getElementById('root'));
root.render(<App />);

const rootNotification = createRoot(document.getElementById("root-notifications"));
rootNotification.render(<Notifications />);