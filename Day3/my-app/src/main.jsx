import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from './About.jsx'
import Home from './Home.jsx'
import { BrouserRouter, Routes, Route } from 'react-router-dom'   

createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrouserRouter>
     
     <nav>
      <link to="/">Home</link>
      <link to="/about">About</link>
      <link to="/app">Message</link>    
     </nav>

    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/app' element={<App/>}/> 
    </Routes>




</BrouserRouter>

    
  </StrictMode>,
)
