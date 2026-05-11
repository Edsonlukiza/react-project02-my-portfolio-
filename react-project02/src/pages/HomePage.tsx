
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
        <div className="min-h-screen w-full">

            <div className="grid grid-cols-3 items-center w-full min-h-[500px] relative overflow-hidden">

                {/* 1. START: The Decorative Orb/Arcs */}
                <div className="relative w-60 h-[440px] justify-self-start">
                    <div className="orb absolute w-[420px] h-[420px] left-[-220px] rounded-full"></div>
                    <div className="arc absolute" style={{ width: '440px', height: '440px', borderColor: '#ff1493', top: '-10px', right: '-10px' }}></div>
                    <div className="arc absolute" style={{ width: '480px', height: '480px', borderColor: '#3b82f6', top: '-30px', right: '-30px' }}></div>
                </div>

                {/* 2. CENTER: Your Text Content */}
                <div className="justify-self-center text-center">
                    <h1 className="text-5xl text-blue-900 font-bold">Hi, I'm Edson</h1>
                    <p className="p-4 text-purple-900 text-lg">
                        I'm a passionate frontend developer
                    </p>
                    <button className="p-3 m-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold w-fit">
                        Let's Connect
                    </button>
                </div>

                {/* 3. END: Your Image */}
                <div className="justify-self-end h-[250px] w-[250px] overflow-hidden rounded-full mr-10">
                    <img src={devImage} alt="Developer" className="object-cover w-full h-full" />
                </div>

            </div>



            <section className="py-20 px-10 bg-gray-100">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-8">Featured Projects</h2>
                    <div className="grid grid-cols-4 gap-6">
                        {featuredProjects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-10 bg-white">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-black mb-6">About Me</h2>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        I'm a passionate frontend developer with experience in creating modern web applications using React and related technologies.
                    </p>
                </div>
            </section>


            <section className="py-20 px-10 bg-purple-900 text-white">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
                    <p className="text-lg mb-8">Feel free to reach out for collaborations or just a friendly chat!</p>
                    <button className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 font-semibold">
                        Get in Touch
                    </button>
                </div>
            </section>


            <section className="py-8 px-10 bg-black text-white text-center">
                <p>&copy; 2026 MyPortfolio. All rights reserved.</p>
            </section>
        </div>
    )
}

export default HomePage