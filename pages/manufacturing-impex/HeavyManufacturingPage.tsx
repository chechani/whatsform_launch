
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { heavyManufacturingData } from '@/data/pages/manufacturing-impex/heavyManufacturing';

const HeavyManufacturingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={heavyManufacturingData}
        />
    );
};

export default HeavyManufacturingPage;




export { getStaticProps } from '@/lib/ssr';

