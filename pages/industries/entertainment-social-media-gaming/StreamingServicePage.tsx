
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { streamingServiceData } from '../../../data/pages/industries/entertainment-social-media-gaming/streamingService';

const StreamingServicePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={streamingServiceData}
        />
    );
};

export default StreamingServicePage;




export { getStaticProps } from '@/lib/ssr';

