import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { MotionConfig } from "motion/react"
import Layout from './controller/Layout'
import './styles/index.css'

function App() {
  return (
    // Honors the visitor's "reduce motion" system setting for every animation
    <MotionConfig reducedMotion="user">
      <BrowserRouter>
        <Routes>
          {/* Layout handles all navigation internally via AnimatePresence */}
          <Route path="*" element={<Layout />} />
        </Routes>
      </BrowserRouter>
    </MotionConfig>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)