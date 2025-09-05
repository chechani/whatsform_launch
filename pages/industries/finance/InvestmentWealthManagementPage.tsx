
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { investmentWealthManagementData } from '../../../data/pages/industries/finance/investmentWealthManagement';

const InvestmentWealthManagementPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={investmentWealthManagementData}
            currentIndustry="Finance"
            currentCategory="Investment & Wealth Management"
        />
    );
};

export default InvestmentWealthManagementPage;



