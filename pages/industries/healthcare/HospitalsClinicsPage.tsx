
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { hospitalsClinicsData } from '../../../data/pages/industries/healthcare/hospitalsClinics';

const HospitalsClinicsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={hospitalsClinicsData} 
            currentIndustry="Healthcare"
            currentCategory="Hospital/Clinic"
        />
    );
};

export default HospitalsClinicsPage;




export { getServerSideProps } from '@/lib/ssr';

