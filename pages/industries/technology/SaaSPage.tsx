
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { saasData } from '../../../data/pages/industries/technology/saas';

const SaaSPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={saasData}
        />
    );
};

export default SaaSPage;



