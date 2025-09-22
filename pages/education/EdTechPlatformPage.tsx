
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { edTechPlatformData } from '@/data/pages/education/edTechPlatform';

const EdTechPlatformPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={edTechPlatformData}
        />
    );
};

export default EdTechPlatformPage;

export { getStaticProps } from '@/lib/ssr';

