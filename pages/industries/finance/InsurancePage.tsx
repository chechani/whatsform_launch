
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { insuranceData } from '../../../data/pages/industries/finance/insurance';

const InsurancePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={insuranceData}
            currentIndustry="Finance"
            currentCategory="Insurance"
        />
    );
};

export default InsurancePage;




export { getServerSideProps } from '@/lib/ssr';

