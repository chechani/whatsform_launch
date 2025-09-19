import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';

const GettingStarted: React.FC = () => (
  <main>
    <GenericPageHero title="Getting Started" subtitle="Set up WhatsForm and launch your first WhatsApp flow." />
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
        <ContentSection title="1. Create account" text="Sign up and verify your workspace email and phone number." />
        <ContentSection title="2. Connect WhatsApp" text="Connect your WhatsApp Business number via Cloud API or BSP." />
        <ContentSection title="3. Build a flow" text="Use the builder or Excel template to publish your first flow." />
      </div>
    </section>
    <CTA />
  </main>
);

export default GettingStarted;

export { getStaticProps } from '@/lib/ssr';

