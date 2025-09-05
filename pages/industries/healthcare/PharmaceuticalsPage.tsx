
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { pharmaceuticalsData } from '../../../data/pages/industries/healthcare/pharmaceuticals';

const PharmaceuticalsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={pharmaceuticalsData} 
            currentIndustry="Healthcare"
            currentCategory="Pharmaceuticals"
        />
    );
};

export default PharmaceuticalsPage;



