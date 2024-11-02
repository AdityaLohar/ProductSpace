// import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrateRoot } from 'react-dom/client';
import App from '../App.jsx';

const root = document.getElementById('root');

hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
