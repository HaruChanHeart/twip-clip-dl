import { createRoot } from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
