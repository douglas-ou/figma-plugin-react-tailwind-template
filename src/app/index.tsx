import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import '@/app/styles/ui.css'

document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('react-app');
  const root = createRoot(container);
  root.render(<App />);
});
