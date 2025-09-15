import React from 'react';
import { GenericPageHero, ContentSection, CTA } from '@/components/PageBuilder';
import Link from 'next/link';

const integrations = [
  { slug: 'google-sheets', title: 'Google Sheets', description: 'Sync form submissions to a sheet and use it as a simple database.' },
  { slug: 'webhooks', title: 'Webhooks', description: 'POST data to your backend or any HTTP endpoint securely.' },
  { slug: 'salesforce', title: 'Salesforce', description: 'Create leads/contacts and log activities directly in Salesforce.' },
  { slug: 'hubspot', title: 'HubSpot', description: 'Add/update contacts and deals in your HubSpot CRM pipelines.' },
  { slug: 'zapier', title: 'Zapier', description: 'Connect with 5,000+ apps using Zapier triggers and actions.' },
  { slug: 'erpnext', title: 'ERPNext', description: 'Create customers, tickets, or documents in ERPNext seamlessly.' },
];

const IntegrationsHub: React.FC = () => {
  return (
    <main>
      <GenericPageHero 
        title="Integrations"
        subtitle="Connect WhatsForm with your tools. Automate data sync and workflows without manual effort."
      />
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <ContentSection
            title="Popular Integrations"
            subtitle="Follow step-by-step guides to connect your stack."
          />
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {integrations.map((i) => (
              <div key={i.slug} className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white">{i.title}</h3>
                <p className="mt-2 text-slate-600 dark:text-slate-400">{i.description}</p>
                <Link href={`/help-center/integrations/${i.slug}`} legacyBehavior>
                  <a className="mt-4 inline-block text-green-600 font-semibold hover:underline">Open Guide →</a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </main>
  );
};

export default IntegrationsHub;
