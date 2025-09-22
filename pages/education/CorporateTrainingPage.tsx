
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { corporateTrainingData } from '@/data/pages/education/corporateTraining';

const CorporateTrainingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={corporateTrainingData}
        />
    );
};

export default CorporateTrainingPage;

export { getStaticProps } from '@/lib/ssr';

