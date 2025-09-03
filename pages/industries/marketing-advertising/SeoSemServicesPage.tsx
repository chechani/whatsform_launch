
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { seoSemServicesData } from '../../../data/pages/industries/marketing-advertising/seoSemServices';

const SeoSemServicesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={seoSemServicesData}
            currentIndustry="Marketing & Advertising"
            currentCategory="SEO/SEM Services"
        />
    );
};

export default SeoSemServicesPage;
