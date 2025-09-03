
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { consultingData } from '../../../data/pages/industries/professional-services/consulting';

const ConsultingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={consultingData}
        />
    );
};

export default ConsultingPage;
