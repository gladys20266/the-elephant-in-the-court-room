import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { HashRouter } from 'react-router-dom'
import '@fontsource/instrument-serif/400.css'
import '@fontsource/instrument-serif/400-italic.css'
import '@fontsource/dm-sans/400.css'
import '@fontsource/dm-sans/500.css'
import '@fontsource/dm-sans/700.css'
import logoUrl from '@/assets/logo.png'
import './index.css'
import App from './App.tsx'

const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']")
if (favicon) {
  favicon.href = logoUrl
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
        <HashRouter>
            <App />
        </HashRouter>
    </HelmetProvider>
</StrictMode>
)
