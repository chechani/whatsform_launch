
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { wasteManagementData } from '../../../data/pages/industries/public-utilities-non-profits/wasteManagement';

const WasteManagementPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={wasteManagementData}
        />
    );
};

export default WasteManagementPage;
