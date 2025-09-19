import React from 'react';
import { useRouter } from 'next/router';
import { GenericPageHero, CTA } from '@/components/PageBuilder';

const ElearningPage: React.FC = () => {
    const router = useRouter();

    return (
        <main>
            <GenericPageHero 
                title="E-Learning Solutions" 
                subtitle="Engage students and automate communication with our powerful WhatsApp tools for education." 
            />
            <CTA />
        </main>
    );
};

export default ElearningPage;
export { getStaticProps } from '@/lib/ssr';

