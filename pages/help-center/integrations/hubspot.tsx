import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const HubSpotIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="HubSpot Integration" subtitle="Sync WhatsApp leads and conversations into HubSpot." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Auth" text="Connect your HubSpot portal with OAuth." />
        <ContentSection title="Mappings" text="Map to Contacts, Companies, and Deals with custom properties." />
        <ContentSection title="Workflows" text="Trigger HubSpot workflows from WhatsApp events." />
      </div>
    </section>
    <CTA />
  </main>
);

export default HubSpotIntegration;
