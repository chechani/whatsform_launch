
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { energyUtilitiesData } from '@/data/pages/public-utilities-non-profits/energyUtilities';

const EnergyUtilitiesPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={energyUtilitiesData}
        />
    );
};

export default EnergyUtilitiesPage;




export { getStaticProps } from '@/lib/ssr';

