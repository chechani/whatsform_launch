
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { contentCreationData } from '../../../data/pages/industries/marketing-advertising/contentCreation';

const ContentCreationPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={contentCreationData}
            currentIndustry="Marketing & Advertising"
            currentCategory="Content Creation"
        />
    );
};

export default ContentCreationPage;




export { getStaticProps } from '@/lib/ssr';

