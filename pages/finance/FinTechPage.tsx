
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { finTechData } from '@/data/pages/finance/finTech';

const FinTechPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={finTechData}
        />
    );
};

export default FinTechPage;

export { getStaticProps } from '@/lib/ssr';

