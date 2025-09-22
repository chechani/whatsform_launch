
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { cloudHostingData } from '@/data/pages/technology/cloudHosting';

const CloudHostingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={cloudHostingData}
        />
    );
};

export default CloudHostingPage;

export { getStaticProps } from '@/lib/ssr';

