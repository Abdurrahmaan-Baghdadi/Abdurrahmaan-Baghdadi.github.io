import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from './controller/Layout'
import './styles/index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout handles all navigation internally via AnimatePresence */}
        <Route path="*" element={<Layout />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)