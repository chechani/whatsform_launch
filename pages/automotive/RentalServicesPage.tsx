
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { rentalServicesData } from '@/data/pages/automotive/rentalServices';

const RentalServicesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={rentalServicesData}
        />
    );
};

export default RentalServicesPage;

export { getStaticProps } from '@/lib/ssr';

