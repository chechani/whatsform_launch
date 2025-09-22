
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { carDealershipData } from '@/data/pages/automotive/carDealership';

const CarDealershipPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={carDealershipData}
        />
    );
};

export default CarDealershipPage;

export { getStaticProps } from '@/lib/ssr';

