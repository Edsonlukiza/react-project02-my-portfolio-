import Hero from '../components/Hero'
import Techstack from '../components/Techstack'
import About from '../components/About'
import GalleryGrid from '../components/GalleryGrid'
import { images } from '../data/galleryImages'

const featuredImages = images.slice(0, 9)

function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-background transition-colors duration-300">
      <Hero />
      <Techstack variant="marquee" />
      <About />

      <section className="bg-slate-50 dark:bg-slate-900 py-16 transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-600">Portfolio</p>
            <h2 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Featured gallery</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-500 dark:text-slate-400">
              A curated selection of project visuals from the portfolio, presented in a clean and modern gallery below the About section.
            </p>
          </div>

          <GalleryGrid images={featuredImages} onDeleteImage={() => undefined} isAdmin={false} />
        </div>
      </section>
    </div>
  )
}

export default HomePage
