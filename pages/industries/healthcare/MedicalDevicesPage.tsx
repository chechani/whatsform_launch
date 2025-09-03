
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { medicalDevicesData } from '../../../data/pages/industries/healthcare/medicalDevices';

const MedicalDevicesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={medicalDevicesData} 
            currentIndustry="Healthcare"
            currentCategory="Medical Devices"
        />
    );
};

export default MedicalDevicesPage;
