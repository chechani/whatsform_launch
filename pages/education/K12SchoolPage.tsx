
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { k12SchoolData } from '@/data/pages/education/k12School';

const K12SchoolPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={k12SchoolData}
        />
    );
};

export default K12SchoolPage;

export { getStaticProps } from '@/lib/ssr';

