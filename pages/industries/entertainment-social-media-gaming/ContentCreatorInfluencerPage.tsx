
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { contentCreatorInfluencerData } from '../../../data/pages/industries/entertainment-social-media-gaming/contentCreatorInfluencer';

const ContentCreatorInfluencerPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={contentCreatorInfluencerData}
        />
    );
};

export default ContentCreatorInfluencerPage;
