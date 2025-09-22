
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { seoSemServicesData } from '@/data/pages/marketing-advertising/seoSemServices';

const SeoSemServicesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={seoSemServicesData}
        />
    );
};

export default SeoSemServicesPage;

export { getStaticProps } from '@/lib/ssr';

