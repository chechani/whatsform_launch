
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { insuranceData } from '@/data/pages/finance/insurance';

const InsurancePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={insuranceData}
        />
    );
};

export default InsurancePage;

export { getStaticProps } from '@/lib/ssr';

