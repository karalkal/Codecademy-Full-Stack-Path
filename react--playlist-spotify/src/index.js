import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppFindArtists from './AppFindArtists';    // since it is default export we can name in any way we like
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <AppFindArtists /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
