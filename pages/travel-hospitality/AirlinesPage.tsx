
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { airlinesData } from '@/data/pages/travel-hospitality/airlines';

const AirlinesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={airlinesData}
        />
    );
};

export default AirlinesPage;




export { getStaticProps } from '@/lib/ssr';

