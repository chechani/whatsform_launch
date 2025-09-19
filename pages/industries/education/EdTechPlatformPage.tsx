
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { edTechPlatformData } from '../../../data/pages/industries/education/edTechPlatform';

const EdTechPlatformPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={edTechPlatformData}
            currentIndustry="Education"
            currentCategory="EdTech Platform"
        />
    );
};

export default EdTechPlatformPage;




export { getStaticProps } from '@/lib/ssr';

