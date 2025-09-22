
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { streamingServiceData } from '@/data/pages/entertainment/streamingService';

const StreamingServicePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={streamingServiceData}
        />
    );
};

export default StreamingServicePage;

export { getStaticProps } from '@/lib/ssr';

