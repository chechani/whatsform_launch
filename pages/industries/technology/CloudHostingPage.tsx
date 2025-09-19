
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { cloudHostingData } from '../../../data/pages/industries/technology/cloudHosting';

const CloudHostingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={cloudHostingData}
        />
    );
};

export default CloudHostingPage;




export { getServerSideProps } from '@/lib/ssr';

