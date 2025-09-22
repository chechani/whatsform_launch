
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { foodDeliveryServiceData } from '@/data/pages/restaurants-food-outlets/foodDeliveryService';

const FoodDeliveryServicePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={foodDeliveryServiceData}
        />
    );
};

export default FoodDeliveryServicePage;




export { getStaticProps } from '@/lib/ssr';

