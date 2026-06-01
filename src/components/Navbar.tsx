import { useState, useEffect } from 'react'

type PageKey = 'home' | 'techstack' | 'about' | 'projects' | 'contact'

interface NavbarProps {
  activePage: PageKey
  onNavigate: (page: PageKey) => void
}

function Navbar({ activePage, onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  const navbarLinks = (active: boolean) =>
    `relative font-medium transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ${active ? 'text-sky-600 dark:text-sky-400' : 'text-inherit'}`
  const mobileNavLink =
    'w-full text-center px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-blue-500'

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  const navigateTo = (page: PageKey) => {
    onNavigate(page)
    setOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 bg-primary text-white shadow-lg dark:bg-slate-900 dark:text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-8 sm:py-4">
        <button
          type="button"
          className="text-lg font-bold tracking-[0.2em] text-white"
          onClick={() => navigateTo('home')}
        >
          MyPort<sub>folio</sub>
        </button>

        <div className="hidden items-center gap-4 sm:flex">
          <button type="button" className={navbarLinks(activePage === 'home')} onClick={() => navigateTo('home')}>
            Home
          </button>
          <button type="button" className={navbarLinks(activePage === 'techstack')} onClick={() => navigateTo('techstack')}>
            Tech stack
          </button>
          <button type="button" className={navbarLinks(activePage === 'about')} onClick={() => navigateTo('about')}>
            About me
          </button>
          <button type="button" className={navbarLinks(activePage === 'projects')} onClick={() => navigateTo('projects')}>
            Featured Projects
          </button>
          <button type="button" className={navbarLinks(activePage === 'contact')} onClick={() => navigateTo('contact')}>
            Contact me
          </button>
          <button className="text-xl" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>

        <button className="sm:hidden text-xl" onClick={() => setOpen(!open)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {open ? (
        <div className="sm:hidden border-t border-white/10 bg-primary/95 px-4 py-4 dark:bg-slate-900/95">
          <button type="button" className={mobileNavLink} onClick={() => navigateTo('home')}>
            Home
          </button>
          <button type="button" className={mobileNavLink} onClick={() => navigateTo('techstack')}>
            Tech stack
          </button>
          <button type="button" className={mobileNavLink} onClick={() => navigateTo('about')}>
            About me
          </button>
          <button type="button" className={mobileNavLink} onClick={() => navigateTo('projects')}>
            Featured Projects
          </button>
          <button type="button" className={mobileNavLink} onClick={() => navigateTo('contact')}>
            Contact me
          </button>
          <button className="mt-2 w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-center text-base text-white transition hover:bg-white/20" onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            {theme === 'light' ? 'Switch to dark 🌙' : 'Switch to light ☀️'}
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default Navbar
