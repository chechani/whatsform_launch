
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { accountingAuditingData } from '@/data/pages/finance/accountingAuditing';

const AccountingAuditingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={accountingAuditingData}
        />
    );
};

export default AccountingAuditingPage;

export { getStaticProps } from '@/lib/ssr';

