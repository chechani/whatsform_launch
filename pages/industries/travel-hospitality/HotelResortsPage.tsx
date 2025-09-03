
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
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
