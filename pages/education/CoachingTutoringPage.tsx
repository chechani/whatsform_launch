
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { coachingTutoringData } from '@/data/pages/education/coachingTutoring';

const CoachingTutoringPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={coachingTutoringData}
        />
    );
};

export default CoachingTutoringPage;

export { getStaticProps } from '@/lib/ssr';

