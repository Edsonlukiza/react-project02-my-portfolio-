import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import TechstackPage from './pages/TechstackPage'
import ContactPage from './pages/ContactPage'

type PageKey = 'home' | 'techstack' | 'about' | 'projects' | 'contact'

function App() {
  const [activePage, setActivePage] = useState<PageKey>('home')

  const renderPage = () => {
    switch (activePage) {
      case 'about':
        return <AboutPage />
      case 'projects':
        return <ProjectsPage />
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
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  )
}

export default App
