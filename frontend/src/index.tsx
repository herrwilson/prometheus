import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles/index.css';

// Make sure the element ID here matches the one in your frontend/index.html file
const container = document.getElementById('app');

if (!container) {
  throw new Error("Could not find 'app' element to mount to!");
}

const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);





