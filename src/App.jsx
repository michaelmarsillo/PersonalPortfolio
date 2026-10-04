import { useEffect, useLayoutEffect, useState } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
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
import "./archive/habbo.css"

function SiteShell({ theme, onToggleTheme, children }) {
  const { pathname } = useLocation()
  const isHabbo = /^\/archive\/misc\/habbo\/?$/.test(pathname)

  // Colour the browser's page canvas too, including mobile overscroll. This
  // override never changes the saved theme, and is removed when leaving Habbo.
  useLayoutEffect(() => {
    document.documentElement.classList.toggle("habbo-active", isHabbo)
    return () => document.documentElement.classList.remove("habbo-active")
  }, [isHabbo])

  return (
    <div className={`${isHabbo ? "habbo-world " : ""}theme-bg flex flex-col min-h-screen overflow-x-hidden w-full`}>
      <Navbar theme={theme} onToggleTheme={onToggleTheme} showThemeToggle={!isHabbo} />
      <div className="flex-grow overflow-x-hidden w-full">{children}</div>
      <Footer />
    </div>
  )
}

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
      <SiteShell theme={theme} onToggleTheme={toggleTheme}>
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
      </SiteShell>
    </BrowserRouter>
  )
}

export default App
