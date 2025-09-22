
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { medicalDevicesData } from '@/data/pages/healthcare/medicalDevices';

const MedicalDevicesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={medicalDevicesData} 
        />
    );
};

export default MedicalDevicesPage;

export { getStaticProps } from '@/lib/ssr';

