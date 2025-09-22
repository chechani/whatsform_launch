
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { yogaMeditationStudioData } from '@/data/pages/fitness-wellness/yogaMeditationStudio';

const YogaMeditationStudioPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={yogaMeditationStudioData}
        />
    );
};

export default YogaMeditationStudioPage;

export { getStaticProps } from '@/lib/ssr';

