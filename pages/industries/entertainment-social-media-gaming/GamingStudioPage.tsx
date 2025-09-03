
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { gamingStudioData } from '../../../data/pages/industries/entertainment-social-media-gaming/gamingStudio';

const GamingStudioPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={gamingStudioData}
        />
    );
};

export default GamingStudioPage;
