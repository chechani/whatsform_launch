
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { pharmaceuticalsData } from '@/data/pages/healthcare/pharmaceuticals';

const PharmaceuticalsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={pharmaceuticalsData} 
        />
    );
};

export default PharmaceuticalsPage;

export { getStaticProps } from '@/lib/ssr';

