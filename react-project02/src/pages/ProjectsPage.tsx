import project1 from '../assets/images/developer1.jpeg'
import project2 from '../assets/images/developer2.jpeg'
import project3 from '../assets/images/developer3.jpeg'

interface Project {
    id: number
    title: string
    description: string
    tech: string[]
    github: string
    live?: string
    image: string
    category: string
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Portfolio Showcase',
        description: 'A responsive portfolio website built with React and Tailwind CSS, featuring animated sections and a clean developer-focused UI.',
        tech: ['React', 'Tailwind', 'Vite'],
        github: 'https://github.com/username/portfolio-showcase',
        live: 'https://your-portfolio-demo.com',
        image: project1,
        category: 'Web App'
    },
    {
        id: 2,
        title: 'Task Manager',
        description: 'A modern task management application with drag-and-drop lists, project filtering, and persistence using local storage.',
        tech: ['React', 'TypeScript', 'CSS'],
        github: 'https://github.com/username/task-manager',
        live: 'https://task-manager-demo.com',
        image: project2,
        category: 'Productivity'
    },
    {
        id: 3,
        title: 'Landing Page',
        description: 'A clean marketing landing page with a split layout, feature cards, and conversion-focused calls to action.',
        tech: ['HTML', 'Tailwind', 'JavaScript'],
        github: 'https://github.com/username/landing-page',
        live: 'https://landing-page-demo.com',
        image: project3,
        category: 'Marketing'
    }
]

function ProjectsPage() {
    return (
        <section className="min-h-screen bg-white dark:bg-background text-slate-900 dark:text-white transition-colors duration-300 px-4 py-12 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl space-y-10">
                <div className="space-y-4 text-center">
                    <p className="text-sm uppercase tracking-[0.35em] text-sky-600">Projects</p>
                    <h1 className="text-4xl font-bold sm:text-5xl">Featured projects</h1>
                    <p className="mx-auto max-w-2xl text-slate-600 dark:text-slate-300">
                        Explore a selection of recent work with split image/info cards and direct access to source code or deployment links.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
                    {projects.map(project => (
                        <article key={project.id} className="flex flex-col h-full overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white text-slate-900 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-slate-800 dark:bg-slate-950 dark:text-white">
                            <div className="h-48 sm:h-56 md:h-48 lg:h-56 overflow-hidden">
                                <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between gap-6 p-6 sm:p-8">
                                <div className="space-y-4">
                                    <span className="inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-sky-700 dark:bg-slate-800 dark:text-sky-300">
                                        {project.category}
                                    </span>
                                    <h2 className="text-2xl font-semibold">{project.title}</h2>
                                    <p className="text-slate-600 dark:text-slate-300">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(tech => (
                                            <span key={tech} className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto min-w-[140px] items-center justify-center rounded-full bg-primary px-6 py-3 text-base font-semibold text-white transition hover:bg-[#5d0037] md:px-5 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-sm">
                                        View on GitHub
                                    </a>
                                    {project.live ? (
                                        <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex w-full sm:w-auto min-w-[140px] items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800 md:px-5 md:py-2 md:text-sm lg:px-4 lg:py-2 lg:text-sm">
                                            View live
                                        </a>
                                    ) : null}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsPage
