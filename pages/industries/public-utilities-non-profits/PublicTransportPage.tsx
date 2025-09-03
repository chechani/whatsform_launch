
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { publicTransportData } from '../../../data/pages/industries/public-utilities-non-profits/publicTransport';

const PublicTransportPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={publicTransportData}
        />
    );
};

export default PublicTransportPage;
