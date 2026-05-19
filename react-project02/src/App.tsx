import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Techstack from './components/Techstack';
import Project from './components/Project';
import About from './components/About';
import Footer from './components/Footer';




function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <Techstack />
        <About />
        {/* <Project project={project1} />
        <Project project={project2} />
        <Project project={project3} /> */}

      </main>
      <Footer />
    </div>

  );
}

export default App;
