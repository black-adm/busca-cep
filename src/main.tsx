import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.tsx'
import './styles/global.css'
import { SaveAddressProvider } from './context/SaveAddressContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SaveAddressProvider>
      <App />
    </SaveAddressProvider>
  </React.StrictMode>,
)
