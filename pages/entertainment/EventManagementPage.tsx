
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { eventManagementData } from '@/data/pages/entertainment/eventManagement';

const EventManagementPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={eventManagementData}
        />
    );
};

export default EventManagementPage;

export { getStaticProps } from '@/lib/ssr';

