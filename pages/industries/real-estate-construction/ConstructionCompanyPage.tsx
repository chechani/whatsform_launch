
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { constructionCompanyData } from '../../../data/pages/industries/real-estate-construction/constructionCompany';

const ConstructionCompanyPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={constructionCompanyData}
        />
    );
};

export default ConstructionCompanyPage;



