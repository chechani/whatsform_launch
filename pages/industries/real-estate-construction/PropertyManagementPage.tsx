
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { propertyManagementData } from '../../../data/pages/industries/real-estate-construction/propertyManagement';

const PropertyManagementPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={propertyManagementData}
        />
    );
};

export default PropertyManagementPage;



