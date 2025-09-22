
import React from 'react';
import { CategoryPageLayout } from '../../components/_CategoryPageLayout';
import { hotelResortsData } from '@/data/pages/travel-hospitality/hotelResorts';

const HotelResortsPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={hotelResortsData}
        />
    );
};

export default HotelResortsPage;




export { getStaticProps } from '@/lib/ssr';

