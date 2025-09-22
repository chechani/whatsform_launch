
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { physicalStoresData } from '@/data/pages/retail/physicalStores';

const PhysicalStoresPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={physicalStoresData}
        />
    );
};

export default PhysicalStoresPage;

export { getStaticProps } from '@/lib/ssr';

