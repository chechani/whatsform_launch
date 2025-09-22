
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { cateringData } from '@/data/pages/restaurants-food-outlets/catering';

const CateringPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={cateringData}
        />
    );
};

export default CateringPage;




export { getStaticProps } from '@/lib/ssr';

