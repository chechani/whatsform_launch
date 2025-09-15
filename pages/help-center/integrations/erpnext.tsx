import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const ERPNextIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="ERPNext Integration" subtitle="Create and update records inside ERPNext from WhatsApp." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Auth" text="Connect using API Key/Secret; restrict scopes appropriately." />
        <ContentSection title="Doctypes" text="Map to Customer, Issue, Lead, or custom DocTypes." />
        <ContentSection title="Validation" text="Use server-side validation and retry policies for reliability." />
      </div>
    </section>
    <CTA />
  </main>
);

export default ERPNextIntegration;
