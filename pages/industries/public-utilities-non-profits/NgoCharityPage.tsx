
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { ngoCharityData } from '../../../data/pages/industries/public-utilities-non-profits/ngo-charity';

const NgoCharityPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={ngoCharityData}
        />
    );
};

export default NgoCharityPage;



