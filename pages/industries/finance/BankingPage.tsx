
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { bankingData } from '../../../data/pages/industries/finance/banking';

const BankingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={bankingData}
            currentIndustry="Finance"
            currentCategory="Banking"
        />
    );
};

export default BankingPage;



