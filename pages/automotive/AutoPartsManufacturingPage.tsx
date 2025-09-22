
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { autoPartsManufacturingData } from '@/data/pages/automotive/autoPartsManufacturing';

const AutoPartsManufacturingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={autoPartsManufacturingData}
        />
    );
};

export default AutoPartsManufacturingPage;

export { getStaticProps } from '@/lib/ssr';

