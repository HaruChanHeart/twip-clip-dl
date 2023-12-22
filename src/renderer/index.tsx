import { createRoot } from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>,
);
