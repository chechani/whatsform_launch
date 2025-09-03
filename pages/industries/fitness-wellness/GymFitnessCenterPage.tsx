
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { gymFitnessCenterData } from '../../../data/pages/industries/fitness-wellness/gymFitnessCenter';

const GymFitnessCenterPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={gymFitnessCenterData}
        />
    );
};

export default GymFitnessCenterPage;
