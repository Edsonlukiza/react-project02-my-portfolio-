
import Navbar from './components/ui/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/ui/Footer'

import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <HomePage />
        <div className="footer"></div>
        <Footer />
      </main>
    </div>

  )
}

export default App
