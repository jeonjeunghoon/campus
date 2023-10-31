import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Global } from '@emotion/react';

import globalStyle from 'styles/globalStyle';

import { deferRender } from 'mocks/browser';

import Router from 'pages/Router';

await deferRender();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyle} />
    <Router />
  </StrictMode>,
);
