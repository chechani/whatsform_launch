
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { wellnessRetreatsData } from '../../../data/pages/industries/fitness-wellness/wellnessRetreats';

const WellnessRetreatsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={wellnessRetreatsData}
        />
    );
};

export default WellnessRetreatsPage;



