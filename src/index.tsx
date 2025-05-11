import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./router";
import './index.css'; // Added import for global styles

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);