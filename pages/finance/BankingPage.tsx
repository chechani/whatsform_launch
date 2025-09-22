
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { bankingData } from '@/data/pages/finance/banking';

const BankingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={bankingData}
        />
    );
};

export default BankingPage;

export { getStaticProps } from '@/lib/ssr';

