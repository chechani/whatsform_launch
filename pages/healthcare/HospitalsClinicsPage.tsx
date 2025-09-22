
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { hospitalsClinicsData } from '@/data/pages/healthcare/hospitalsClinics';

const HospitalsClinicsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={hospitalsClinicsData} 
        />
    );
};

export default HospitalsClinicsPage;

export { getStaticProps } from '@/lib/ssr';

