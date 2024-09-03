import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import './app/styles/index.css';
import { GlobalSuspenseBoundary } from './app/provider';
import { router } from './app/router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GlobalSuspenseBoundary>
      <RouterProvider router={router} />
    </GlobalSuspenseBoundary>
  </StrictMode>
);
