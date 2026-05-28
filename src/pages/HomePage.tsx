import Hero from '../components/Hero'
import Techstack from '../components/Techstack'
import About from '../components/About'

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      <Hero />
      <Techstack />
      <About />
    </div>
  )
}

export default HomePage
