
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { spaSalonData } from '../../../data/pages/industries/fitness-wellness/spaSalon';

const SpaSalonPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={spaSalonData}
        />
    );
};

export default SpaSalonPage;




export { getStaticProps } from '@/lib/ssr';

