
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { fineDiningData } from '@/data/pages/restaurants-food-outlets/fineDining';

const FineDiningPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={fineDiningData}
        />
    );
};

export default FineDiningPage;




export { getStaticProps } from '@/lib/ssr';

