
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { rentalServicesData } from '../../../data/pages/industries/automotive/rentalServices';

const RentalServicesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={rentalServicesData}
        />
    );
};

export default RentalServicesPage;
