
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { k12SchoolData } from '../../../data/pages/industries/education/k12School';

const K12SchoolPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={k12SchoolData}
            currentIndustry="Education"
            currentCategory="K-12 School"
        />
    );
};

export default K12SchoolPage;




export { getStaticProps } from '@/lib/ssr';

