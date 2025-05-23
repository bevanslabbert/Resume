import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Helmet} from "react-helmet";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <Helmet>
        <meta charSet="utf-8" />
        <meta name="keywords" content="strength, powerlifting, power, bench" />
        <title>Bevan Slabbert</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
