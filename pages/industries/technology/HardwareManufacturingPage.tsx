
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { hardwareManufacturingData } from '../../../data/pages/industries/technology/hardwareManufacturing';

const HardwareManufacturingPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={hardwareManufacturingData}
        />
    );
};

export default HardwareManufacturingPage;




export { getStaticProps } from '@/lib/ssr';

