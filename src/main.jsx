import { createRoot } from 'react-dom/client';
import React from 'react';
import App from './App.jsx';

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
