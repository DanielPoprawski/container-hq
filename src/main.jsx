import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route } from 'react-router'
import { Routes } from 'react-router'
import IndoorParking from './pages/IndoorParking.jsx'
import OutdoorParking from './pages/OutdoorParking.jsx'
import SelfStorage from './pages/SelfStorage.jsx'
import OfficeSpaces from './pages/OfficeSpaces.jsx'
import Services from './pages/Services.jsx'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path="/" element={<App/>} />
      <Route path="/services" element={<Services/>} />
      {/* // <Route path ="/gallery" element={}/> TODO: Gallery */}
      <Route path="/services/indoor-parking" element={<IndoorParking/>} />
      <Route path="/services/outdoor-parking" element={<OutdoorParking/>} />
      <Route path="/services/self-storage" element={<SelfStorage/>} />
      <Route path="/services/offices" element={<OfficeSpaces/>} />

    </Routes>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
