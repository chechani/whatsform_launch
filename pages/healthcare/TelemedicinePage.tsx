
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { telemedicineData } from '@/data/pages/healthcare/telemedicine';

const TelemedicinePage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={telemedicineData} 
        />
    );
};

export default TelemedicinePage;

export { getStaticProps } from '@/lib/ssr';

