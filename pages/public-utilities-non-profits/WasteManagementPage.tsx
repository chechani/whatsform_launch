
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { wasteManagementData } from '@/data/pages/public-utilities-non-profits/wasteManagement';

const WasteManagementPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={wasteManagementData}
        />
    );
};

export default WasteManagementPage;




export { getStaticProps } from '@/lib/ssr';

