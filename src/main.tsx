import React from 'react';
import ReactDOM from 'react-dom/client';
import { Global, css } from '@emotion/react';

import YouTubeStats from './YouTubeStats';

const globalStyles = css`
  html {
    background-color: #121212;
    color: #fff;
    font-family: 'Poppins', sans-serif;
  }
`;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyles} />
    <YouTubeStats />
  </React.StrictMode>
);
