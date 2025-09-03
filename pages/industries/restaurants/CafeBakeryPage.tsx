
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { cafeBakeryData } from '../../../data/pages/industries/restaurants/cafeBakery';

const CafeBakeryPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={cafeBakeryData}
        />
    );
};

export default CafeBakeryPage;
