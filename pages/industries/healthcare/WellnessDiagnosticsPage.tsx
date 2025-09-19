
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { wellnessDiagnosticsData } from '../../../data/pages/industries/healthcare/wellnessDiagnostics';

const WellnessDiagnosticsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={wellnessDiagnosticsData} 
            currentIndustry="Healthcare"
            currentCategory="Wellness & Diagnostics"
        />
    );
};

export default WellnessDiagnosticsPage;




export { getServerSideProps } from '@/lib/ssr';

