
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { investmentWealthManagementData } from '@/data/pages/finance/investmentWealthManagement';

const InvestmentWealthManagementPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={investmentWealthManagementData}
        />
    );
};

export default InvestmentWealthManagementPage;

export { getStaticProps } from '@/lib/ssr';

