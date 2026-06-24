import { StrictMode } from 'react'
{/*importing root*/}
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
{/*Importing browerRoughter */}
import { BrowserRouter } from 'react-router-dom'
{/*Importing CoinContext to pass the value around within all the insider components*/}
import CoinContextProvider from './CoinContext.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
<CoinContextProvider>
      <App />
</CoinContextProvider>
   </BrowserRouter>
  </StrictMode>,
)
