
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { hardwareManufacturingData } from '@/data/pages/technology/hardwareManufacturing';

const HardwareManufacturingPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={hardwareManufacturingData}
        />
    );
};

export default HardwareManufacturingPage;

export { getStaticProps } from '@/lib/ssr';

