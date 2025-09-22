
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { architecturePlanningData } from '@/data/pages/real-estate-construction/architecturePlanning';

const ArchitecturePlanningPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={architecturePlanningData}
        />
    );
};

export default ArchitecturePlanningPage;




export { getStaticProps } from '@/lib/ssr';

