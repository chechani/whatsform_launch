
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { fineDiningData } from '../../../data/pages/industries/restaurants/fineDining';

const FineDiningPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={fineDiningData}
        />
    );
};

export default FineDiningPage;




export { getStaticProps } from '@/lib/ssr';

