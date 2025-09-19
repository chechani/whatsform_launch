
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { eCommerceOnlineStoresData } from '../../../data/pages/industries/retail/ecommerceOnlineStores';

const ECommerceOnlineStoresPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={eCommerceOnlineStoresData}
            currentIndustry="Retail"
            currentCategory="eCommerce (Online Stores)"
        />
    );
};

export default ECommerceOnlineStoresPage;




export { getStaticProps } from '@/lib/ssr';

