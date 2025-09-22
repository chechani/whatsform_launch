
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { humanResourcesData } from '@/data/pages/professional-services/humanResources';

const HumanResourcesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={humanResourcesData}
        />
    );
};

export default HumanResourcesPage;




export { getStaticProps } from '@/lib/ssr';

