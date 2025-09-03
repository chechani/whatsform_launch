
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { coWorkingSpacesData } from '../../../data/pages/industries/real-estate-construction/coWorkingSpaces';

const CoWorkingSpacesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={coWorkingSpacesData}
        />
    );
};

export default CoWorkingSpacesPage;
