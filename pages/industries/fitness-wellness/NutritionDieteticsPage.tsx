
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { nutritionDieteticsData } from '../../../data/pages/industries/fitness-wellness/nutritionDietetics';

const NutritionDieteticsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={nutritionDieteticsData}
        />
    );
};

export default NutritionDieteticsPage;




export { getServerSideProps } from '@/lib/ssr';

