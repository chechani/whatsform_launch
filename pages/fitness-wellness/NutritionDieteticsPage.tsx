
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { nutritionDieteticsData } from '@/data/pages/fitness-wellness/nutritionDietetics';

const NutritionDieteticsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={nutritionDieteticsData}
        />
    );
};

export default NutritionDieteticsPage;

export { getStaticProps } from '@/lib/ssr';

