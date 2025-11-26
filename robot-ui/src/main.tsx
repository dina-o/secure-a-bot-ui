import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import LandingScreen from './LandingScreen.tsx'

function Root() {
  const [showApp, setShowApp] = useState(false);

  return showApp ? (
    <App />
  ) : (
    <LandingScreen onBegin={() => setShowApp(true)} />
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)