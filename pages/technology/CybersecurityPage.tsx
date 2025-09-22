
import React from 'react';
import { CategoryPageLayout } from '@/components/_CategoryPageLayout';
import { cybersecurityData } from '@/data/pages/technology/cybersecurity';

const CybersecurityPage: React.FC = () => {
    return (
        <CategoryPageLayout 
            data={cybersecurityData}
        />
    );
};

export default CybersecurityPage;

export { getStaticProps } from '@/lib/ssr';

