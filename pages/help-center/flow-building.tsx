import React from 'react';
import { GenericPageHero, CTA, ContentSection } from '@/components/PageBuilder';
import Link from 'next/link';

const FlowBuildingHelp: React.FC = () => {
  return (
    <main>
      <GenericPageHero 
        title="Flow Building"
        subtitle="Design WhatsApp flows step-by-step: triggers, questions, branching, actions, and integrations."
      />
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 space-y-10">
          <ContentSection
            title="What you'll learn"
            text="How to plan your flow, structure questions, use validations, and connect actions like CRM updates, email, and webhooks."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Starter Guide</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Build your first lead capture flow with branching and a confirmation step.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold text-slate-800 dark:text-white">Advanced Patterns</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-2">Re-usable subflows, dynamic variables, and multi-language prompts.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/forms-browser" legacyBehavior>
              <a className="text-green-600 font-semibold hover:underline">Explore flow templates →</a>
            </Link>
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default FlowBuildingHelp;

export { getServerSideProps } from '@/lib/ssr';

