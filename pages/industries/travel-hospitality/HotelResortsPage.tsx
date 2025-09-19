
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { hotelResortsData } from '../../../data/pages/industries/travel-hospitality/hotelResorts';

const HotelResortsPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={hotelResortsData}
        />
    );
};

export default HotelResortsPage;




export { getStaticProps } from '@/lib/ssr';

