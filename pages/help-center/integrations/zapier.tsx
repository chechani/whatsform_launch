import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const ZapierIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="Zapier Integration" subtitle="Connect with thousands of apps via Zapier." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Triggers" text="New submission, conversation event, or status change." />
        <ContentSection title="Actions" text="Create records in your CRM, send emails, or update sheets." />
        <ContentSection title="Testing" text="Use Zapier’s test mode with sample payloads from WhatsForm." />
      </div>
    </section>
    <CTA />
  </main>
);

export default ZapierIntegration;
