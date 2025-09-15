import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const GoogleSheetsIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="Google Sheets Integration" subtitle="Send WhatsApp form submissions directly to Google Sheets." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Setup" text="Create a Sheet, get share permissions, and paste the Sheet ID into your integration settings." />
        <ContentSection title="Mapping" text="Map form fields to sheet columns (auto-create if missing)." />
        <ContentSection title="Tips" text="Use one sheet per flow or add a column for flow_name to keep data tidy." />
      </div>
    </section>
    <CTA />
  </main>
);

export default GoogleSheetsIntegration;
