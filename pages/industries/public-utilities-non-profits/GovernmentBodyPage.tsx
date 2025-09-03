
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { governmentBodyData } from '../../../data/pages/industries/public-utilities-non-profits/governmentBody';

const GovernmentBodyPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={governmentBodyData}
        />
    );
};

export default GovernmentBodyPage;
