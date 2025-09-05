import React from 'react';
import { GenericPageHero, CTA, VideoGallery } from '@/components/PageBuilder';
import { videosPageData } from '@/data/pages/videos';

const VideosPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={videosPageData.hero.title} 
                subtitle={videosPageData.hero.subtitle}
            />
            <VideoGallery videos={videosPageData.videos} />
            <CTA />
        </main>
    );
};

export default VideosPage;
