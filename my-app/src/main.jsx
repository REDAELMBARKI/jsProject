import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { JsMapDataProvider } from './data/jsMap.jsx'
import { FilteredDataProvider } from './data/filterBasedData.jsx'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <JsMapDataProvider>
      <FilteredDataProvider>
        
             <App />
      
      </FilteredDataProvider>
  </JsMapDataProvider>
     
  </BrowserRouter>,
)
