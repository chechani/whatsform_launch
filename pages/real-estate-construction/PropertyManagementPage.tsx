
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { propertyManagementData } from '@/data/pages/real-estate-construction/propertyManagement';

const PropertyManagementPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={propertyManagementData}
        />
    );
};

export default PropertyManagementPage;




export { getStaticProps } from '@/lib/ssr';

