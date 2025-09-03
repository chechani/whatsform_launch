
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { designArchitectureData } from '../../../data/pages/industries/professional-services/designArchitecture';

const DesignArchitecturePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={designArchitectureData}
        />
    );
};

export default DesignArchitecturePage;
