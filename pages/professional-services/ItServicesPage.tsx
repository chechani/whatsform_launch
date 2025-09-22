
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { itServicesData } from '@/data/pages/professional-services/itServices';

const ItServicesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={itServicesData}
        />
    );
};

export default ItServicesPage;




export { getStaticProps } from '@/lib/ssr';

