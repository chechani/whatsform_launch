
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { electronicsData } from '../../../data/pages/industries/manufacturing-impex/electronics';

const ElectronicsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={electronicsData}
        />
    );
};

export default ElectronicsPage;
