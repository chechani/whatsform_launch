
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { softwareDevelopmentData } from '../../../data/pages/industries/technology/softwareDevelopment';

const SoftwareDevelopmentPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={softwareDevelopmentData}
        />
    );
};

export default SoftwareDevelopmentPage;




export { getServerSideProps } from '@/lib/ssr';

