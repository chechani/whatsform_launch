
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { publicTransportData } from '@/data/pages/public-utilities-non-profits/publicTransport';

const PublicTransportPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={publicTransportData}
        />
    );
};

export default PublicTransportPage;




export { getStaticProps } from '@/lib/ssr';

