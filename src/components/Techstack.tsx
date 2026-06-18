import {
    FaAndroid,
    FaCode,
    FaCss3Alt,
    FaGitAlt,
    FaHtml5,
    FaMicrosoft,
    FaNodeJs,
    FaPhp,
    FaReact,
} from 'react-icons/fa'
import {
    SiCplusplus,
    SiMysql,
    SiPycharm,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'
import type { IconType } from 'react-icons'

type TechstackVariant = 'marquee' | 'grid'

interface TechstackProps {
    variant?: TechstackVariant
}

interface TechItem {
    name: string
    Icon: IconType
    color: string
}

const techItems: TechItem[] = [
    { name: 'PHP', Icon: FaPhp, color: '#777BB4' },
    { name: 'HTML', Icon: FaHtml5, color: '#E34F26' },
    { name: 'CSS', Icon: FaCss3Alt, color: '#1572B6' },
    { name: 'React', Icon: FaReact, color: '#61DAFB' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#5FA04E' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
    { name: 'C', Icon: FaCode, color: '#A8B9CC' },
    { name: 'C++', Icon: SiCplusplus, color: '#00599C' },
    { name: 'C#', Icon: FaMicrosoft, color: '#68217A' },
    { name: 'ASP.NET', Icon: FaMicrosoft, color: '#512BD4' },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
    { name: 'VS Code', Icon: VscVscode, color: '#007ACC' },
    { name: 'PyCharm', Icon: SiPycharm, color: '#21D789' },
    { name: 'Android Studio', Icon: FaAndroid, color: '#3DDC84' },
]

function TechCard({ item, compact = false }: { item: TechItem; compact?: boolean }) {
    const { Icon } = item

    return (
        <div
            className={`group flex items-center justify-center gap-3 rounded-lg border border-slate-200 bg-white text-slate-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:border-sky-400/70 ${compact ? 'h-16 min-w-44 px-5' : 'h-36 px-6'}`}
        >
            <Icon
                className={`${compact ? 'text-3xl' : 'text-5xl'} transition-transform duration-300 group-hover:scale-110`}
                style={{ color: item.color }}
                aria-hidden="true"
            />
            <span className={`${compact ? 'text-base' : 'text-lg'} font-semibold`}>
                {item.name}
            </span>
        </div>
    )
}

function Techstack({ variant = 'grid' }: TechstackProps) {
    const isMarquee = variant === 'marquee'
    const marqueeItems = [...techItems, ...techItems]

    return (
        <section className="bg-white py-10 transition-colors duration-300 dark:bg-background">
            <div className="px-6 text-center font-semibold text-slate-900 dark:text-white">
                <h2 className="text-3xl">Tech Stack</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">
                    Here are some of the technologies and tools I work with:
                </p>
            </div>

            {isMarquee ? (
                <div className="mt-8 overflow-hidden">
                    <div className="tech-marquee flex w-max gap-4 px-4">
                        {marqueeItems.map((item, index) => (
                            <TechCard key={`${item.name}-${index}`} item={item} compact />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 lg:grid-cols-4">
                    {techItems.map(item => (
                        <TechCard key={item.name} item={item} />
                    ))}
                </div>
            )}
        </section>
    )
}

export default Techstack
