
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { cateringData } from '../../../data/pages/industries/restaurants/catering';

const CateringPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={cateringData}
        />
    );
};

export default CateringPage;



