import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Blog from "./blog/Blog"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-[#121212]">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App

