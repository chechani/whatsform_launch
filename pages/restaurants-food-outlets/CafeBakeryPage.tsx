
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { cafeBakeryData } from '@/data/pages/restaurants-food-outlets/cafeBakery';

const CafeBakeryPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={cafeBakeryData}
        />
    );
};

export default CafeBakeryPage;




export { getStaticProps } from '@/lib/ssr';

