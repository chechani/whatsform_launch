
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { coWorkingSpacesData } from '@/data/pages/real-estate-construction/coWorkingSpaces';

const CoWorkingSpacesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={coWorkingSpacesData}
        />
    );
};

export default CoWorkingSpacesPage;




export { getStaticProps } from '@/lib/ssr';

