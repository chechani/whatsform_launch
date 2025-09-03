
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
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
