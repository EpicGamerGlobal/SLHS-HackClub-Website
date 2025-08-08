import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import '@mantine/core/styles.css';

//lowk this is the shittiest possible way to fix this, but oh well
declare global {
  interface Window {
    Buffer: typeof Buffer;
  }
}

import { Buffer } from 'buffer';
window.Buffer = Buffer;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
