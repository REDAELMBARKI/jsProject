import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FilteredDataProvider } from './data/filterBasedData.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
     <FilteredDataProvider>
       <App />
     </FilteredDataProvider>
  </BrowserRouter>,
)
