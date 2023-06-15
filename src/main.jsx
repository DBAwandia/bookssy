import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SearchProductContextProvider } from './Context/SearchProductContext.jsx'
import { SearchLocationContextProvider } from './Context/SearchLocationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SearchLocationContextProvider>
      <SearchProductContextProvider>
        <App />
      </SearchProductContextProvider>
    </SearchLocationContextProvider>
  </React.StrictMode>,
)
