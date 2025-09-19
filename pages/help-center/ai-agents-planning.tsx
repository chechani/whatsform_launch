import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';

const AIAgentsPlanningHelp: React.FC = () => {
  return (
    <main>
      <GenericPageHero 
        title="AI Agents Planning"
        subtitle="Plan scope, guardrails, data sources, and handoff for your WhatsApp AI agents."
      />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <ContentSection
            title="Agent blueprint"
            text="Define intents, success criteria, escalation rules, and knowledge sources (FAQs, docs, APIs)."
          />
          <ContentSection
            title="Safety & compliance"
            text="Set boundaries, rate limits, and logging for audits. Configure PII handling and redaction policies."
          />
          <ContentSection
            title="Human-in-the-loop"
            text="Design graceful agent→human handoff using Team Inbox with summaries and conversation context."
          />
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default AIAgentsPlanningHelp;

export { getStaticProps } from '@/lib/ssr';

