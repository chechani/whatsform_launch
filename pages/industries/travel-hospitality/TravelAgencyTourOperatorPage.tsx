
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { travelAgencyTourOperatorData } from '../../../data/pages/industries/travel-hospitality/travelAgency-tourOperator';

const TravelAgencyTourOperatorPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={travelAgencyTourOperatorData}
        />
    );
};

export default TravelAgencyTourOperatorPage;



