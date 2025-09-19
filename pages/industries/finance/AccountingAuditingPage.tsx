
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { accountingAuditingData } from '../../../data/pages/industries/finance/accountingAuditing';

const AccountingAuditingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={accountingAuditingData}
            currentIndustry="Finance"
            currentCategory="Accounting & Auditing"
        />
    );
};

export default AccountingAuditingPage;




export { getServerSideProps } from '@/lib/ssr';

