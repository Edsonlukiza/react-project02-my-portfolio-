
import { useState } from 'react'
import './ProjectCard.css'

// Define what a project looks like (TypeScript)
interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    image: string
}

// Component receives project as a prop
function ProjectCard({ project }: { project: Project }) {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div
            className="project-card"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transform: isHovered ? 'translateY(-8px)' : 'none',
                transition: 'transform 0.3s ease'
            }}
        >
            <img src={project.image} alt={project.title} />
            <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                    {project.tech.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                </div>
                <button className="view-btn">View Project →</button>
            </div>
        </div>
    )
}

export default ProjectCard