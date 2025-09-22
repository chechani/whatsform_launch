
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { onlineTravelAggregatorOTAData } from '@/data/pages/travel-hospitality/onlineTravelAggregator-ota';

const OnlineTravelAggregatorOTAPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={onlineTravelAggregatorOTAData}
        />
    );
};

export default OnlineTravelAggregatorOTAPage;
export { getStaticProps } from '@/lib/ssr';

