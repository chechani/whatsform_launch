
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { higherEducationData } from '../../../data/pages/industries/education/higherEducation';

const HigherEducationPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={higherEducationData}
            currentIndustry="Education"
            currentCategory="Higher Education"
        />
    );
};

export default HigherEducationPage;



