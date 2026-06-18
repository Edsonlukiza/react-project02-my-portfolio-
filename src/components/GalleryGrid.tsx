import { useState } from 'react'
import type { GalleryImage } from '../data/galleryImages'
import { FiTrash2 } from 'react-icons/fi'

interface GalleryGridProps {
    images: GalleryImage[]
    onDeleteImage: (id: string) => void
    isAdmin?: boolean
}

function GalleryGrid({ images, onDeleteImage, isAdmin = false }: GalleryGridProps) {
    const [hoveredId, setHoveredId] = useState<string | null>(null)

    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {images.map(image => (
                <div
                    key={image.id}
                    onMouseEnter={() => setHoveredId(image.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="group relative overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-slate-50 hover:shadow-xl hover:shadow-slate-900/10 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-sky-400/70 dark:hover:bg-slate-800 dark:hover:shadow-black/30"
                >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                        <img
                            src={image.imageUrl}
                            alt={image.title}
                            loading="lazy"
                            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>

                        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                            <div className="translate-y-2 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                                <h3 className="text-lg font-semibold leading-tight text-white">{image.title}</h3>
                                <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-200">{image.description}</p>
                            </div>
                        </div>

                        {isAdmin && hoveredId === image.id && (
                            <button
                                onClick={() => onDeleteImage(image.id)}
                                className="absolute right-4 top-4 rounded-full bg-red-600 p-3 text-white opacity-0 shadow-lg shadow-red-950/30 transition hover:bg-red-700 group-hover:opacity-100"
                                title="Delete"
                            >
                                <FiTrash2 size={18} />
                            </button>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default GalleryGrid
