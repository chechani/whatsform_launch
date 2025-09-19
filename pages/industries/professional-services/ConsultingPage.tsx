
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { consultingData } from '../../../data/pages/industries/professional-services/consulting';

const ConsultingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={consultingData}
        />
    );
};

export default ConsultingPage;




export { getServerSideProps } from '@/lib/ssr';

