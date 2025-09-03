
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { legalServicesData } from '../../../data/pages/industries/professional-services/legalServices';

const LegalServicesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={legalServicesData}
        />
    );
};

export default LegalServicesPage;
