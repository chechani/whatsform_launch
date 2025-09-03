
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { cybersecurityData } from '../../../data/pages/industries/technology/cybersecurity';

const CybersecurityPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={cybersecurityData}
        />
    );
};

export default CybersecurityPage;
