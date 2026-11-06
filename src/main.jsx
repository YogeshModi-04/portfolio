import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// index.html loads the Google Fonts stylesheet as media="print" so it never
// blocks rendering; apply it once it has arrived.
const asyncStylesheet = document.querySelector('link[data-async-css]')
if (asyncStylesheet) {
  if (asyncStylesheet.sheet) {
    asyncStylesheet.media = 'all'
  } else {
    asyncStylesheet.addEventListener(
      'load',
      () => {
        asyncStylesheet.media = 'all'
      },
      { once: true },
    )
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
