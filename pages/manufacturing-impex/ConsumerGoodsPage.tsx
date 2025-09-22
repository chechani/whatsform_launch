
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { consumerGoodsData } from '@/data/pages/manufacturing-impex/consumerGoods';

const ConsumerGoodsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={consumerGoodsData}
        />
    );
};

export default ConsumerGoodsPage;




export { getStaticProps } from '@/lib/ssr';

