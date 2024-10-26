import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Layout from './Components/Layout'
import './index.css'
import Home from './assets/Components/Pages/Home'
import Projects from './assets/Components/Pages/Projects'
import AboutMe from './assets/Components/Pages/AboutMe'
import Skills from './assets/Components/Pages/Skills'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>}/>
          <Route path="projects" element={<Projects />}/>
          <Route path="aboutMe" element={<AboutMe />}/>
          <Route path="skills" element={<Skills />}/> 
        </ Route >
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
