
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { architecturePlanningData } from '../../../data/pages/industries/real-estate-construction/architecturePlanning';

const ArchitecturePlanningPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={architecturePlanningData}
        />
    );
};

export default ArchitecturePlanningPage;
