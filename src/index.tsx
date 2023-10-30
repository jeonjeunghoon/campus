import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { deferRender } from 'mocks/browser';

import Router from 'pages/Router';

await deferRender();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
