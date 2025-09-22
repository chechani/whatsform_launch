
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { softwareDevelopmentData } from '@/data/pages/technology/softwareDevelopment';

const SoftwareDevelopmentPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={softwareDevelopmentData}
        />
    );
};

export default SoftwareDevelopmentPage;

export { getStaticProps } from '@/lib/ssr';

