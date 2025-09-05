
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { traditionalAdvertisingData } from '../../../data/pages/industries/marketing-advertising/traditionalAdvertising';

const TraditionalAdvertisingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={traditionalAdvertisingData}
            currentIndustry="Marketing & Advertising"
            currentCategory="Traditional Advertising"
        />
    );
};

export default TraditionalAdvertisingPage;



