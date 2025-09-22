
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { publicRelationsData } from '@/data/pages/marketing-advertising/publicRelations';

const PublicRelationsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={publicRelationsData}
        />
    );
};

export default PublicRelationsPage;

export { getStaticProps } from '@/lib/ssr';

