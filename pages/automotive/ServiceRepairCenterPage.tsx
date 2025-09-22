
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { serviceRepairCenterData } from '@/data/pages/automotive/serviceRepairCenter';

const ServiceRepairCenterPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={serviceRepairCenterData}
        />
    );
};

export default ServiceRepairCenterPage;

export { getStaticProps } from '@/lib/ssr';

