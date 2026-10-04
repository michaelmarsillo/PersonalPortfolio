import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Archive from "./archive/Archive"
import ArchiveCategoryPage from "./archive/ArchiveCategoryPage"
import FragrancePage from "./archive/FragrancePage"
import PlacesPage from "./archive/PlacesPage"
import MiscPage from "./archive/MiscPage"
import Blog from "./blog/Blog"
import BlogPost from "./blog/BlogPost"
import NotFound from "./pages/NotFound"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import "./App.css"

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return "light"
    }

    return localStorage.getItem("theme") === "dark" ? "dark" : "light"
  })

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === "dark" ? "light" : "dark")
  }

  return (
    <BrowserRouter>
      <div className="theme-bg flex flex-col min-h-screen overflow-x-hidden w-full">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        <div className="flex-grow overflow-x-hidden w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/archive" element={<Archive />} />
            <Route path="/archive/fragrance/:fragranceId?" element={<FragrancePage />} />
            <Route path="/archive/places/:placeId?" element={<PlacesPage />} />
            <Route path="/archive/misc/:miscId?" element={<MiscPage />} />
            <Route path="/archive/:categorySlug" element={<ArchiveCategoryPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
