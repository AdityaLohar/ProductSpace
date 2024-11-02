// import React from 'react';
import App from '../App.jsx';
import { StaticRouter } from 'react-router-dom/server';
// import { renderToString } from 'react-dom/server';

export function render(url) {
  return (
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
