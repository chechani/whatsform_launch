import React from 'react';
import { GenericPageHero, CTA, ContactForm } from '../components/PageBuilder';
import { contactPageData } from '../data/pages/contact';

const ContactPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={contactPageData.hero.title} 
                subtitle={contactPageData.hero.subtitle}
            />
            <ContactForm 
                formTitle={contactPageData.form.title}
                formSubtitle={contactPageData.form.subtitle}
            />
            <CTA />
        </main>
    );
};

export default ContactPage;

export { getServerSideProps } from '@/lib/ssr';

