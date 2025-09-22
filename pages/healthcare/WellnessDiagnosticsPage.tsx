
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { wellnessDiagnosticsData } from '@/data/pages/healthcare/wellnessDiagnostics';

const WellnessDiagnosticsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={wellnessDiagnosticsData} 
        />
    );
};

export default WellnessDiagnosticsPage;

export { getStaticProps } from '@/lib/ssr';

