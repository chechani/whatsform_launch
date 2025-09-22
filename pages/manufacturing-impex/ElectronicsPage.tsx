
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { electronicsData } from '@/data/pages/manufacturing-impex/electronics';

const ElectronicsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={electronicsData}
        />
    );
};

export default ElectronicsPage;




export { getStaticProps } from '@/lib/ssr';

