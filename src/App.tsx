import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import TechstackPage from './pages/TechstackPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'

type PageKey = 'home' | 'techstack' | 'about' | 'projects' | 'gallery' | 'contact'

function App() {
  const [activePage, setActivePage] = useState<PageKey>(() => {
    const hash = window.location.hash.replace('#/', '')
    const allowed = ['home', 'techstack', 'about', 'projects', 'gallery', 'contact']
    return (allowed.includes(hash) ? (hash as PageKey) : 'home')
  })

  const navigateTo = (page: PageKey) => {
    setActivePage(page)
    window.location.hash = `#/${page}`
  }

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
      case 'gallery':
        return <GalleryPage />
      case 'techstack':
        return <TechstackPage />
      case 'contact':
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-background dark:text-white">
      <Navbar activePage={activePage} onNavigate={navigateTo} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
