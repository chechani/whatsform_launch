
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { realEstateAgencyData } from '../../../data/pages/industries/real-estate-construction/realEstateAgency';

const RealEstateAgencyPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={realEstateAgencyData}
        />
    );
};

export default RealEstateAgencyPage;




export { getStaticProps } from '@/lib/ssr';

