
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { onlineTravelAggregatorOTAData } from '../../../data/pages/industries/travel-hospitality/onlineTravelAggregator-ota';

const OnlineTravelAggregatorOTAPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={onlineTravelAggregatorOTAData}
        />
    );
};

export default OnlineTravelAggregatorOTAPage;




export { getStaticProps } from '@/lib/ssr';

