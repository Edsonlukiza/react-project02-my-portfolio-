import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import { images } from '../data/galleryImages'

function GalleryPage() {
    const [error, setError] = useState<string | null>(null)
    const [loading] = useState(false)

    const noopDelete = () => setError('Deleting images is disabled in local gallery mode.')

    return (
        <div className="min-h-screen bg-slate-50 px-4 py-16 text-slate-900 transition-colors duration-300 dark:bg-background dark:text-white">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-sky-600 dark:text-sky-400">Portfolio</p>
                    <h1 className="mb-4 text-5xl font-bold text-slate-950 dark:text-white">
                        Gallery
                    </h1>
                    <p className="max-w-2xl text-lg text-slate-600 dark:text-slate-400">A static local gallery showcasing images from the project assets.</p>
                </div>

                {error && (
                    <div className="mb-8 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950/40">
                        <p className="text-red-700 dark:text-red-200">{error}</p>
                    </div>
                )}

                <div>
                    {loading ? (
                        <div className="flex items-center justify-center py-20">
                            <div className="h-12 w-12 animate-spin rounded-full border-2 border-slate-300 border-t-sky-500 dark:border-slate-700 dark:border-t-sky-400"></div>
                        </div>
                    ) : images.length === 0 ? (
                        <div className="text-center py-20">
                            <p className="text-xl text-slate-500 dark:text-slate-400">No images yet. The admin can upload the first image after signing in.</p>
                        </div>
                    ) : (
                        <GalleryGrid images={images} onDeleteImage={noopDelete} isAdmin={false} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default GalleryPage
