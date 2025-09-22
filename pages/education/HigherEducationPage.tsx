
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { higherEducationData } from '@/data/pages/education/higherEducation';

const HigherEducationPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={higherEducationData}
        />
    );
};

export default HigherEducationPage;

export { getStaticProps } from '@/lib/ssr';

