
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { logisticsSupplyChainData } from '@/data/pages/manufacturing-impex/logisticsSupplyChain';

const LogisticsSupplyChainPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={logisticsSupplyChainData}
        />
    );
};

export default LogisticsSupplyChainPage;




export { getStaticProps } from '@/lib/ssr';

