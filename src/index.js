import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
//we are desctructuring the robos so that we can grab multiple export from the robos.js file.
import App from './containers/App.js';

ReactDOM.render(<App/> , 
                document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
