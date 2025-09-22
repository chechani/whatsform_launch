
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { ngoCharityData } from '@/data/pages/public-utilities-non-profits/ngo-charity';

const NgoCharityPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={ngoCharityData}
        />
    );
};

export default NgoCharityPage;
export { getStaticProps } from '@/lib/ssr';

