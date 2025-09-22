
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { digitalMarketingAgencyData } from '@/data/pages/marketing-advertising/digitalMarketingAgency';

const DigitalMarketingAgencyPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={digitalMarketingAgencyData}
        />
    );
};

export default DigitalMarketingAgencyPage;

export { getStaticProps } from '@/lib/ssr';

