
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { corporateTrainingData } from '../../../data/pages/industries/education/corporateTraining';

const CorporateTrainingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={corporateTrainingData}
            currentIndustry="Education"
            currentCategory="Corporate Training"
        />
    );
};

export default CorporateTrainingPage;



