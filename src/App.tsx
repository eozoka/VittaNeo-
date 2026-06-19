import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Voos from './pages/Voos'
import Sobre from './pages/Sobre'
import Integrantes from './pages/Integrantes'
import FAQ from './pages/FAQ'
import Contato from './pages/Contato'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#030303] text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/voos" element={<Voos />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
