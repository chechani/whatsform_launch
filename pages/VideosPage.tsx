


import React, { useState } from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';
import { videosPageData } from '../data/pages/videos';

interface VideosPageProps {
    navigate: (path: string) => void;
}

const VideosPage: React.FC<VideosPageProps> = ({ navigate }) => {
    // State to manage the currently active video
    const [activeVideo, setActiveVideo] = useState(videosPageData.videos[0]);

    return (
        <main>
            <GenericPageHero 
                title={videosPageData.hero.title} 
                subtitle={videosPageData.hero.subtitle} 
            />
            <div className="py-24 lg:py-28 bg-white dark:bg-slate-950">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Video Player */}
                        <div className="lg:col-span-2">
                            <div className="aspect-video bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800">
                                <iframe 
                                    key={activeVideo.id} // Add key to force re-render
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&rel=0`} 
                                    title={activeVideo.title} 
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <div className="mt-6">
                                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{activeVideo.title}</h2>
                                <p className="mt-2 text-lg text-slate-600 dark:text-slate-300">{activeVideo.description}</p>
                            </div>
                        </div>

                        {/* Video Playlist */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Up Next</h3>
                            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                                {videosPageData.videos.map(video => (
                                    <button
                                        key={video.id}
                                        onClick={() => setActiveVideo(video)}
                                        className={`w-full text-left p-4 rounded-xl transition-all duration-200 flex items-start space-x-4 ${
                                            activeVideo.id === video.id 
                                            ? 'bg-green-100 dark:bg-green-500/10 ring-2 ring-green-500 shadow-lg' 
                                            : 'bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800'
                                        }`}
                                    >
                                        <img src={video.thumbnail} alt={video.title} className="w-28 rounded-md aspect-video object-cover flex-shrink-0" />
                                        <div>
                                            <h4 className="font-semibold text-slate-800 dark:text-white leading-tight">{video.title}</h4>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <CTA navigate={navigate} />
        </main>
    );
};

export default VideosPage;