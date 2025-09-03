
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { foodDeliveryServiceData } from '../../../data/pages/industries/restaurants/foodDeliveryService';

const FoodDeliveryServicePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={foodDeliveryServiceData}
        />
    );
};

export default FoodDeliveryServicePage;
