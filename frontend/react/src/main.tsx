import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MainComponent } from './MainComponent'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import campLogo from '/app-logo-icons/favicon-96.png'
import App from './App'

function Home() {
  return <h1>Home oldal</h1>;
}

function About() {
  return <h1>About oldal</h1>;
}

function Contact() {
  return <h1>Contact oldal</h1>;
}


createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <App />
    {/* Navigation */}
    <nav>
      <ul>
        <li>  <Link to="/">Főoldal</Link></li>
        <li>  <Link to="/home">Home</Link> |{" "}</li>
        <li> <Link to="/about">About</Link> |{" "}</li>
        <li> <Link to="/contact">Contact</Link></li>
        <li><Link to="/camps">Táborok böngészése</Link></li>
      </ul>
    </nav>
    <main>
      <img src={campLogo} alt='A Nyári Tábor Foglaló ikonja' />
        <div><Link to="/home">Nyári Tábor Foglaló</Link></div>
    </main>
<br />
    {/* Routes */}
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/camps" element={<h1>Táborok böngészése oldal</h1>} />
    </Routes>
  </BrowserRouter>,
)


