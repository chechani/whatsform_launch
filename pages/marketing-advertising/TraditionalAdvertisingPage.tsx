
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { traditionalAdvertisingData } from '@/data/pages/marketing-advertising/traditionalAdvertising';

const TraditionalAdvertisingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={traditionalAdvertisingData}
        />
    );
};

export default TraditionalAdvertisingPage;

export { getStaticProps } from '@/lib/ssr';

