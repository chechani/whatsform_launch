
import React from 'react';
import { CategoryPageLayout } from '../CategoryPageLayout';
import { evChargingInfrastructureData } from '../../../data/pages/industries/automotive/evChargingInfrastructure';

const EvChargingInfrastructurePage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={evChargingInfrastructureData}
        />
    );
};

export default EvChargingInfrastructurePage;
