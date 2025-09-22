
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { constructionCompanyData } from '@/data/pages/real-estate-construction/constructionCompany';

const ConstructionCompanyPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={constructionCompanyData}
        />
    );
};

export default ConstructionCompanyPage;




export { getStaticProps } from '@/lib/ssr';

