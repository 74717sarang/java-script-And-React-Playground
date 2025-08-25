import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AuthProvider,test } from './Contex/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <AuthProvider/>
    <test/> */}
  </StrictMode>,
)
