
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { quickServiceRestaurantQSRData } from '@/data/pages/restaurants-food-outlets/quickServiceRestaurant-qsr';

const QuickServiceRestaurantQSRPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={quickServiceRestaurantQSRData}
        />
    );
};

export default QuickServiceRestaurantQSRPage;
export { getStaticProps } from '@/lib/ssr';

