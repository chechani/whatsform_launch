
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { evChargingInfrastructureData } from '@/data/pages/automotive/evChargingInfrastructure';

const EvChargingInfrastructurePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={evChargingInfrastructureData}
        />
    );
};

export default EvChargingInfrastructurePage;

export { getStaticProps } from '@/lib/ssr';

