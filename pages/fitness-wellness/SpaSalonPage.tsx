
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { spaSalonData } from '@/data/pages/fitness-wellness/spaSalon';

const SpaSalonPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={spaSalonData}
        />
    );
};

export default SpaSalonPage;

export { getStaticProps } from '@/lib/ssr';

