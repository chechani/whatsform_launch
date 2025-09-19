
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { autoPartsManufacturingData } from '../../../data/pages/industries/automotive/autoPartsManufacturing';

const AutoPartsManufacturingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={autoPartsManufacturingData}
        />
    );
};

export default AutoPartsManufacturingPage;




export { getStaticProps } from '@/lib/ssr';

