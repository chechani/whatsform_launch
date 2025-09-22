
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { gamingStudioData } from '@/data/pages/entertainment/gamingStudio';

const GamingStudioPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={gamingStudioData}
        />
    );
};

export default GamingStudioPage;

export { getStaticProps } from '@/lib/ssr';

