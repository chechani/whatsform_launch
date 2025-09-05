
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { airlinesData } from '../../../data/pages/industries/travel-hospitality/airlines';

const AirlinesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={airlinesData}
        />
    );
};

export default AirlinesPage;



