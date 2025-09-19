
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { carDealershipData } from '../../../data/pages/industries/automotive/carDealership';

const CarDealershipPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={carDealershipData}
        />
    );
};

export default CarDealershipPage;




export { getServerSideProps } from '@/lib/ssr';

