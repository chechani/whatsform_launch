
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { legalServicesData } from '@/data/pages/professional-services/legalServices';

const LegalServicesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={legalServicesData}
        />
    );
};

export default LegalServicesPage;




export { getStaticProps } from '@/lib/ssr';

