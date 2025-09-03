
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { eventManagementData } from '../../../data/pages/industries/entertainment-social-media-gaming/eventManagement';

const EventManagementPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={eventManagementData}
        />
    );
};

export default EventManagementPage;
