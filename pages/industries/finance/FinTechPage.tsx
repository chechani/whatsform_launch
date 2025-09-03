
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { finTechData } from '../../../data/pages/industries/finance/finTech';

const FinTechPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={finTechData}
            currentIndustry="Finance"
            currentCategory="FinTech"
        />
    );
};

export default FinTechPage;
