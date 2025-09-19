
import React from 'react';
import { CategoryPageLayout } from '../../../components/_CategoryPageLayout';
import { omnichannelData } from '../../../data/pages/industries/retail/omnichannel';

const OmnichannelPage: React.FC<{navigate: (path: string) => void}> = ({ navigate }) => {
    return (
        <CategoryPageLayout 
            navigate={navigate} 
            data={omnichannelData}
            currentIndustry="Retail"
            currentCategory="Omnichannel (eCommerce and Physical Stores)"
        />
    );
};

export default OmnichannelPage;




export { getServerSideProps } from '@/lib/ssr';

