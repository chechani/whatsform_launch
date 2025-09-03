
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { quickServiceRestaurantQSRData } from '../../../data/pages/industries/restaurants/quickServiceRestaurant-qsr';

const QuickServiceRestaurantQSRPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={quickServiceRestaurantQSRData}
        />
    );
};

export default QuickServiceRestaurantQSRPage;
