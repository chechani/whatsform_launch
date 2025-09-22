
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { realEstateAgencyData } from '@/data/pages/real-estate-construction/realEstateAgency';

const RealEstateAgencyPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={realEstateAgencyData}
        />
    );
};

export default RealEstateAgencyPage;




export { getStaticProps } from '@/lib/ssr';

