import project1 from '../assets/images/tucasa.png'
import project2 from '../assets/images/tucasa.png'
import project3 from '../assets/images/blog.png'
import project4 from '../assets/images/evangelism.jpg'
import project5 from '../assets/images/oddity.png'
import project6 from '../assets/images/hotel.jpg'
import project7 from '../assets/images/simukiganjan.png'

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
        title: 'SMART VENDING MACHINE FINAL YEAR PROJECT(2026)',
        description:
            'A smart vending machine management system designed to streamline operations and enhance user experience.',
        tech: ['PYTHON', 'C++', 'FIREBASE'],
        github: 'https://github.com/Edsonlukiza/Smartvending-Machine-final-year-Project',
        live: '#',
        image: project1,
        category: 'Vendor System'
    },

    {
        id: 2,
        title: 'TSMS',
        description:
            'A religious campus management system developed to manage student information, events, leadership activities, announcements, and communication within the campus ministry.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Edsonlukiza/TSMS',
        live: 'https://collin-ministry.great-site.net/?i=1',
        image: project2,
        category: 'Management System'
    },

    {
        id: 3,
        title: 'SportsBlog',
        description:
            'A dynamic sports blogging platform where users can read sports news, match updates, player statistics, and interact with posts through comments.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Edsonlukiza/SportsBlog',
        live: 'https://sportsblog-demo.com',
        image: project3,
        category: 'Blog Website'
    },

    {
        id: 4,
        title: 'Evangelism Website',
        description:
            'A responsive church evangelism website created to share sermons, events, ministry information, and inspirational content with visitors online.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Edsonlukiza/Evangelism-Website',
        live: 'https://evangelism-demo.com',
        image: project4,
        category: 'Religious Website'
    },

    {
        id: 5,
        title: 'Oddit',
        description:
            'A modern web application built using PHP for managing digital operations and improving workflow efficiency with a clean and user-friendly interface.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Edsonlukiza/Oddit',
        live: 'https://green-heart.infinityfreeapp.com/',
        image: project5,
        category: 'Web Application'
    },

    {
        id: 6,
        title: 'Hotel Management System',
        description:
            'A hotel booking and management platform that handles room reservations, customer records, check-ins, check-outs, and hotel administration tasks.',
        tech: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
        github: 'https://github.com/Edsonlukiza/Hotel-Management',
        live: 'https://hotel-demo.com',
        image: project6,
        category: 'Management System'
    },
    {
        id: 7,
        title: 'Simu Kiganjani',
        description:
            'A collaborative modern web application developed to provide users with a seamless digital platform experience, featuring responsive design, fast performance, and interactive user interfaces.',
        tech: ['React', 'Tailwind CSS', 'TypeScript'],
        github: 'https://github.com/username/simu-kiganjani',
        live: 'https://kiganjani-drive-hub-o31d.vercel.app/',
        image: project7,
        category: 'Collaborative Project'
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
