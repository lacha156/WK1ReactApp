import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './mycomponents/nav';
import Login from './mycomponents/login';

ReactDOM.render(
 <div className="container">
   <Navbar />
   <Login />
 </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
