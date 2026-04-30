// src/components/common/Navbar.tsx
import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <nav className="navbar">
            <div className="nav-container">
                {/* Logo */}
                <a href="/" className="nav-logo">
                    MyPortfolio
                </a>

                {/* Desktop Menu */}
                <div className="nav-menu">
                    <a href="/" className="nav-link">Home</a>
                    <a href="/projects" className="nav-link">Projects</a>
                    <a href="/about" className="nav-link">About</a>
                    <a href="/contact" className="nav-link">Contact</a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-menu-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <a href="/">Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </div>
            )}
        </nav>
    )
}

export default Navbar  