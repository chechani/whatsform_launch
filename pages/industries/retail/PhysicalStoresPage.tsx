
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { physicalStoresData } from '../../../data/pages/industries/retail/physicalStores';

const PhysicalStoresPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={physicalStoresData}
            currentIndustry="Retail"
            currentCategory="Physical Stores (Brick and Mortar Stores)"
        />
    );
};

export default PhysicalStoresPage;




export { getServerSideProps } from '@/lib/ssr';

