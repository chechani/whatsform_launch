
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { eCommerceOnlineStoresData } from '@/data/pages/retail/ecommerceOnlineStores';

const ECommerceOnlineStoresPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={eCommerceOnlineStoresData}
        />
    );
};

export default ECommerceOnlineStoresPage;

export { getStaticProps } from '@/lib/ssr';

