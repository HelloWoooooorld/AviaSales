import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
<<<<<<< HEAD
import { ProvideAuth } from '../src/hooks/useAuth';

ReactDOM.render(
  <React.StrictMode>
    <ProvideAuth>
      <App />
    </ProvideAuth>
  </React.StrictMode>,
=======
import { ProvideAuth } from "./hooks/use-auth";

ReactDOM.render(
  <ProvideAuth>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProvideAuth>,
>>>>>>> form
  document.getElementById('root')
);
