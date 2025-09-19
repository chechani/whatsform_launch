
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { publicRelationsData } from '../../../data/pages/industries/marketing-advertising/publicRelations';

const PublicRelationsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={publicRelationsData}
            currentIndustry="Marketing & Advertising"
            currentCategory="Public Relations"
        />
    );
};

export default PublicRelationsPage;




export { getServerSideProps } from '@/lib/ssr';

