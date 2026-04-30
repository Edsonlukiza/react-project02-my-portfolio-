
import devImage from '../assets/images/developer2.jpeg'
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


            <section className="hero">

                <div className="half-orb">
                    <div className="orb">
                        <div className="grid"></div>

                        <span className="arc arc1"></span>
                        <span className="arc arc2"></span>
                        <span className="arc arc3"></span>

                        <span className="glow g1"></span>
                        <span className="glow g2"></span>
                    </div>
                </div>

                <div className="textcontainer">
                    <h1>Hi, I'm edson</h1><br />
                    <p className="subtitle">
                        Am a developer
                    </p>
                    <button className="cta-button">Let's Connect</button>
                </div>
                <div className="img-container">

                    <div className="developer-img">
                        <img src={devImage} alt="Developer" />
                    </div>

                </div>


            </section>


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
            <section className="about-me">
                <div className="container">
                    <h2>About Me</h2>
                    <p>
                        I'm a passionate frontend developer with experience in creating modern web applications using React and related technologies.
                    </p>
                </div>
            </section>
            <section className="contact-me">
                <div className="container">
                    <h2>Contact Me</h2>
                    <p>Feel free to reach out for collaborations or just a friendly chat!</p>
                    <button className="contact-button">Get in Touch →</button>
                </div>
            </section>
            <section className="footer">
                <div className="container">
                    <p>&copy; 2026 MyPortfolio. All rights reserved.</p>
                </div>
            </section>
        </div>
    )
}

export default HomePage