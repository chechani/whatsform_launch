
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { yogaMeditationStudioData } from '../../../data/pages/industries/fitness-wellness/yogaMeditationStudio';

const YogaMeditationStudioPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={yogaMeditationStudioData}
        />
    );
};

export default YogaMeditationStudioPage;




export { getStaticProps } from '@/lib/ssr';

