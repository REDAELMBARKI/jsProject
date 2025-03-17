import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { FilteredDataProvider } from './data/filterBasedData.jsx'
import { JsMapDataProvider } from './data/jsMap.jsx'
import { PagenationContextProvider } from './reducers/PagenationReducer.jsx';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <JsMapDataProvider>
      <FilteredDataProvider>
         <PagenationContextProvider>
             <App />
         </PagenationContextProvider>
      </FilteredDataProvider>
  </JsMapDataProvider>
     
  </BrowserRouter>,
)
