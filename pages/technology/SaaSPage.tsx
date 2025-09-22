
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { saasData } from '@/data/pages/technology/saas';

const SaaSPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={saasData}
        />
    );
};

export default SaaSPage;

export { getStaticProps } from '@/lib/ssr';

