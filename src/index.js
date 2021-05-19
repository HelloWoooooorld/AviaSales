import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ProvideAuth } from "./hooks/use-auth";

ReactDOM.render(
  <ProvideAuth>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProvideAuth>,
  document.getElementById('root')
);

