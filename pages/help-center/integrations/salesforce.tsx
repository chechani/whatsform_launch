import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const SalesforceIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="Salesforce Integration" subtitle="Create leads and log activities from WhatsApp conversations." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Auth" text="Connect via OAuth; we store tokens securely." />
        <ContentSection title="Objects" text="Map to Lead, Contact, Opportunity; customize field mappings." />
        <ContentSection title="Best Practices" text="Deduplicate by phone; log key steps as Tasks." />
      </div>
    </section>
    <CTA />
  </main>
);

export default SalesforceIntegration;

export { getServerSideProps } from '@/lib/ssr';

