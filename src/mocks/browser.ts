import { setupWorker } from 'msw/browser';

import { handlers } from 'mocks/handlers';

export const deferRender = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const worker = setupWorker(...handlers);

  await worker.start();
};
