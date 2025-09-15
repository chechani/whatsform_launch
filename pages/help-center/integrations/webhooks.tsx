import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const WebhooksIntegration: React.FC = () => (
  <main>
    <GenericPageHero title="Webhooks Integration" subtitle="Send HTTP POSTs to your backend securely." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="Endpoint" text="Provide HTTPS endpoint URL; support headers & bearer tokens." />
        <ContentSection title="Payload" text="JSON contains form data, contact, timestamps, and message IDs." />
        <ContentSection title="Security" text="Sign requests with HMAC; verify signature on server." />
      </div>
    </section>
    <CTA />
  </main>
);

export default WebhooksIntegration;
