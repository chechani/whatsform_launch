
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
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
