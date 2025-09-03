
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { consumerGoodsData } from '../../../data/pages/industries/manufacturing-impex/consumerGoods';

const ConsumerGoodsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={consumerGoodsData}
        />
    );
};

export default ConsumerGoodsPage;
