
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { digitalMarketingAgencyData } from '../../../data/pages/industries/marketing-advertising/digitalMarketingAgency';

const DigitalMarketingAgencyPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={digitalMarketingAgencyData}
            currentIndustry="Marketing & Advertising"
            currentCategory="Digital Marketing Agency"
        />
    );
};

export default DigitalMarketingAgencyPage;



