import React from 'react';
import ReactDOM from 'react-dom';

// import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// import Calculator from './calculator';
// import User from './User';
import reportWebVitals from './reportWebVitals';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import Post from './Post';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
    {/* <Calculator/> */}
    {/* <User/> */}
    {/* <Post/> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
