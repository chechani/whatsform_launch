import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const FormBuildingHelp: React.FC = () => (
  <main>
    <GenericPageHero title="Form Building" subtitle="Create and customize WhatsApp-native forms and steps." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Fields" text="Text, number, file upload, location, date, and list pickers." />
        <ContentSection title="Validation" text="Required, regex, ranges, and conditional branching." />
        <ContentSection title="UX Tips" text="Keep questions short, use quick replies, confirm before submit." />
      </div>
    </section>
    <CTA />
  </main>
);

export default FormBuildingHelp;

export { getStaticProps } from '@/lib/ssr';

