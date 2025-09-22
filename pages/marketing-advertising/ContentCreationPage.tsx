
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { contentCreationData } from '@/data/pages/marketing-advertising/contentCreation';

const ContentCreationPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={contentCreationData}
        />
    );
};

export default ContentCreationPage;

export { getStaticProps } from '@/lib/ssr';

