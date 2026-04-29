// src/pages/HomePage.tsx
import ProjectCard from '../components/projects/ProjectCard'

// Mock data (will be replaced with real projects later)
const featuredProjects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Full-stack shopping cart with React & Node.js",
        tech: ["React", "Node.js", "MongoDB"],
        image: "/src/assets/project1.jpg"
    },
    {
        id: 2,
        title: "Weather Dashboard",
        description: "Real-time weather app with interactive maps",
        tech: ["React", "API", "Chart.js"],
        image: "/src/assets/project2.jpg"
    }
]

function HomePage() {
    return (
        <div className="homepage">
            {/* Hero Section */}
            <section className="hero">
                <div className="container">
                    <h1>Hi, I'm edson</h1>
                    <p className="subtitle">
                        Frontend Developer specializing in React
                    </p>
                    <button className="cta-button">View My Work →</button>
                </div>
            </section>

            {/* Featured Projects */}
            <section className="featured-projects">
                <div className="container">
                    <h2>Featured Projects</h2>
                    <div className="projects-grid">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomePage