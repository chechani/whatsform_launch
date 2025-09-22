
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { gymFitnessCenterData } from '@/data/pages/fitness-wellness/gymFitnessCenter';

const GymFitnessCenterPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={gymFitnessCenterData}
        />
    );
};

export default GymFitnessCenterPage;

export { getStaticProps } from '@/lib/ssr';

