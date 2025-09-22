
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { travelAgencyTourOperatorData } from '@/data/pages/travel-hospitality/travelAgency-tourOperator';

const TravelAgencyTourOperatorPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={travelAgencyTourOperatorData}
        />
    );
};

export default TravelAgencyTourOperatorPage;
export { getStaticProps } from '@/lib/ssr';

