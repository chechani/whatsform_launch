
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { yogaMeditationStudioData } from '../../../data/pages/industries/fitness-wellness/yogaMeditationStudio';

const YogaMeditationStudioPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={yogaMeditationStudioData}
        />
    );
};

export default YogaMeditationStudioPage;
