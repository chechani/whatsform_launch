
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { omnichannelData } from '@/data/pages/retail/omnichannel';

const OmnichannelPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={omnichannelData}
        />
    );
};

export default OmnichannelPage;

export { getStaticProps } from '@/lib/ssr';

