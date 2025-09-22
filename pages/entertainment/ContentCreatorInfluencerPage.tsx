
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { contentCreatorInfluencerData } from '@/data/pages/entertainment/contentCreatorInfluencer';

const ContentCreatorInfluencerPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={contentCreatorInfluencerData}
        />
    );
};


export default ContentCreatorInfluencerPage;




export { getStaticProps } from '@/lib/ssr';

