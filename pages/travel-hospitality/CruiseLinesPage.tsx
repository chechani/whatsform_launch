
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { cruiseLinesData } from '@/data/pages/travel-hospitality/cruiseLines';

const CruiseLinesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={cruiseLinesData}
        />
    );
};

export default CruiseLinesPage;




export { getStaticProps } from '@/lib/ssr';

