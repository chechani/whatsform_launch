
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { socialMediaPlatformData } from '../../../data/pages/industries/entertainment-social-media-gaming/socialMediaPlatform';

const SocialMediaPlatformPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={socialMediaPlatformData}
        />
    );
};

export default SocialMediaPlatformPage;
