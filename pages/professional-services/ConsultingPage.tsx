
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { consultingData } from '@/data/pages/professional-services/consulting';

const ConsultingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={consultingData}
        />
    );
};

export default ConsultingPage;




export { getStaticProps } from '@/lib/ssr';

