
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { socialMediaPlatformData } from '@/data/pages/entertainment/socialMediaPlatform';

const SocialMediaPlatformPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={socialMediaPlatformData}
        />
    );
};

export default SocialMediaPlatformPage;

export { getStaticProps } from '@/lib/ssr';

