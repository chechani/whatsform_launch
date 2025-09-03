
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { humanResourcesData } from '../../../data/pages/industries/professional-services/humanResources';

const HumanResourcesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={humanResourcesData}
        />
    );
};

export default HumanResourcesPage;
