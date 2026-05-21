import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Techstack from './components/Techstack';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-background dark:text-white">
      <Navbar />

      <main>
        <Hero />
        <Techstack />
        <About />
      </main>

      <Footer />
    </div>
  );
}

export default App;