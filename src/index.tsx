import { StrictMode } from 'react';

import { createRoot } from 'react-dom/client';

import { Global, ThemeProvider } from '@emotion/react';

import globalStyle from 'styles/globalStyle';
import { theme } from 'styles/theme';

import { deferRender } from 'mocks/browser';

import Router from 'pages/Router';

await deferRender();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <Router />
    </ThemeProvider>
  </StrictMode>,
);
