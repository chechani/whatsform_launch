
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { itServicesData } from '../../../data/pages/industries/professional-services/itServices';

const ItServicesPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={itServicesData}
        />
    );
};

export default ItServicesPage;




export { getStaticProps } from '@/lib/ssr';

