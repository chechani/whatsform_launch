import React from 'react';
import { GenericPageHero, CTA } from '../PageBuilder';

// FIX: Added props to accept and pass the navigate function.
interface ElearningPageProps {
    navigate: (path: string) => void;
}

const ElearningPage: React.FC<ElearningPageProps> = ({ navigate }) => {
    return (
        <main>
            <GenericPageHero 
                title="E-Learning Solutions" 
                subtitle="Engage students and automate communication with our powerful WhatsApp tools for education." 
            />
            <CTA navigate={navigate} />
        </main>
    );
};

export default ElearningPage;