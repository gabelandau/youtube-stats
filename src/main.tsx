import React from 'react';
import ReactDOM from 'react-dom/client';

import Router from './app/Router';
import Theme from './app/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Theme>
      <Router />
    </Theme>
  </React.StrictMode>
);
