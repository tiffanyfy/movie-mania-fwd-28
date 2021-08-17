import React from 'react';
import ReactDOM from 'react-dom';
import App from './routers/AppRouter';

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);