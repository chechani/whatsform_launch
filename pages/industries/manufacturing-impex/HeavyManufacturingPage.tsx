
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { heavyManufacturingData } from '../../../data/pages/industries/manufacturing-impex/heavyManufacturing';

const HeavyManufacturingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={heavyManufacturingData}
        />
    );
};

export default HeavyManufacturingPage;
