
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { cruiseLinesData } from '../../../data/pages/industries/travel-hospitality/cruiseLines';

const CruiseLinesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={cruiseLinesData}
        />
    );
};

export default CruiseLinesPage;



