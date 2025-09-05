
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { serviceRepairCenterData } from '../../../data/pages/industries/automotive/serviceRepairCenter';

const ServiceRepairCenterPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={serviceRepairCenterData}
        />
    );
};

export default ServiceRepairCenterPage;



