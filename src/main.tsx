import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import '../assets/css/main.css';
import '../assets/css/Home.css';
import '../assets/css/About us.css';
import '../assets/css/Gallery.css';
import '../assets/css/contact us.css';
import './react-overrides.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/assets/js/service-worker.js').catch((error: unknown) => {
      console.info('Service Worker registration failed:', error);
    });
  });
}
