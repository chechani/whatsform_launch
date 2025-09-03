
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { telemedicineData } from '../../../data/pages/industries/healthcare/telemedicine';

const TelemedicinePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={telemedicineData} 
            currentIndustry="Healthcare"
            currentCategory="Telemedicine"
        />
    );
};

export default TelemedicinePage;
