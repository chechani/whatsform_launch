
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { logisticsSupplyChainData } from '../../../data/pages/industries/manufacturing-impex/logisticsSupplyChain';

const LogisticsSupplyChainPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={logisticsSupplyChainData}
        />
    );
};

export default LogisticsSupplyChainPage;
