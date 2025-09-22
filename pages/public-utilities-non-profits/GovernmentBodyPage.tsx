
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { governmentBodyData } from '@/data/pages/public-utilities-non-profits/governmentBody';

const GovernmentBodyPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={governmentBodyData}
        />
    );
};

export default GovernmentBodyPage;




export { getStaticProps } from '@/lib/ssr';

