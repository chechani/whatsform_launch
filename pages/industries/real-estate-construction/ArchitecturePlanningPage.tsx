
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
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



