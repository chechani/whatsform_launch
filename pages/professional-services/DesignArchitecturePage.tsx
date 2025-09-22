
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { designArchitectureData } from '@/data/pages/professional-services/designArchitecture';

const DesignArchitecturePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={designArchitectureData}
        />
    );
};

export default DesignArchitecturePage;
export { getStaticProps } from '@/lib/ssr';

