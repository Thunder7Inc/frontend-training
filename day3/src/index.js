import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ManageProvider } from './Component/ManagerContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ManageProvider> <App /></ManageProvider>
   
  </React.StrictMode>
);


reportWebVitals();
