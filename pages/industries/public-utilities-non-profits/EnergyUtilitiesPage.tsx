
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { energyUtilitiesData } from '../../../data/pages/industries/public-utilities-non-profits/energyUtilities';

const EnergyUtilitiesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={energyUtilitiesData}
        />
    );
};

export default EnergyUtilitiesPage;
