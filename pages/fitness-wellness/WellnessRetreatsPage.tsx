
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { wellnessRetreatsData } from '@/data/pages/fitness-wellness/wellnessRetreats';

const WellnessRetreatsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={wellnessRetreatsData}
        />
    );
};

export default WellnessRetreatsPage;

export { getStaticProps } from '@/lib/ssr';

