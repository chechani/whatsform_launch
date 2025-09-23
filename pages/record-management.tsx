import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid, FAQ } from '../components/PageBuilder';
import Link from 'next/link';

const recordManagementPageData = {
    hero: {
        title: "Turn Every WhatsApp Conversation Into Structured Business Records",
        subtitle: "Transform unstructured chat conversations into organized, searchable, and actionable business data with intelligent record management.",
    },
    sections: [
        {
            type: 'contentWithImage',
            subtitle: 'AUTOMATIC DATA EXTRACTION',
            title: 'AI-Powered Conversation Intelligence',
            text: `Our advanced AI automatically extracts structured data from natural conversations. Names, dates, amounts, preferences, and custom business information become searchable records without manual entry.`,
            image: 'https://picsum.photos/seed/record-extraction/500/400',
            features: [
                "Smart field recognition and validation in real-time",
                "Auto-categorization of conversation data by type",
                "Custom field mapping for business-specific information",
                "Confidence scoring for extracted data accuracy"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DYNAMIC DATABASE CREATION',
            title: 'Databases That Build Themselves',
            text: `No manual database setup required. WhatsForm automatically creates and maintains databases from conversation patterns, establishing relationships and schemas that evolve with your business.`,
            image: 'https://picsum.photos/seed/record-database/500/400',
            reverse: true,
            features: [
                "Auto-generated schemas from conversation patterns",
                "Intelligent relationship mapping between records",
                "Scalable architecture that grows with your data",
                "Custom record types for industry-specific needs"
            ]
        },
        {
            type: 'pageFeatureGrid',
            title: 'Complete Record Management Suite',
            subtitle: 'Everything you need for enterprise-grade data management',
            features: [
                {
                    icon: 'MagnifyingGlassIcon',
                    title: 'Advanced Search & Filtering',
                    description: 'Find any information instantly with powerful search across all conversation records, metadata, and custom fields.'
                },
                {
                    icon: 'DocumentDuplicateIcon',
                    title: 'Version Control & History',
                    description: 'Complete audit trail with version control, change tracking, and rollback capabilities for every record.'
                },
                {
                    icon: 'ArrowsRightLeftIcon',
                    title: 'Real-time Data Sync',
                    description: 'Bidirectional synchronization with CRM, ERP, and business systems ensures data consistency everywhere.'
                },
                {
                    icon: 'ShieldCheckIcon',
                    title: 'Enterprise Security',
                    description: 'Role-based access control, encryption, and compliance features protect your business-critical data.'
                },
                {
                    icon: 'ChartBarIcon',
                    title: 'Business Intelligence',
                    description: 'Transform conversation data into actionable insights with built-in analytics and reporting tools.'
                },
                {
                    icon: 'CogIcon',
                    title: 'Custom Workflows',
                    description: 'Automate record processing, validation, and distribution based on business rules and triggers.'
                }
            ]
        }
    ],
    closing: {
        title: "Transform Your Data Management Today",
        subtitle: "Join thousands of businesses using WhatsForm to turn conversations into valuable business records",
        cta: "Start Free Trial"
    },
    faq: {
        title: "Record Management FAQ",
        subtitle: "Common questions about data management and security",
        categories: [
            {
                id: 'data-extraction',
                name: "Data Extraction & Processing",
                description: "How WhatsForm captures and processes conversation data",
                faqs: [
                    {
                        question: "How does automatic data extraction work?",
                        answer: "Our AI analyzes conversation patterns and context to identify structured data like names, dates, amounts, and custom fields. It learns from your business patterns to improve accuracy over time."
                    },
                    {
                        question: "Can I customize what data gets extracted?",
                        answer: "Yes! You can define custom fields, set validation rules, and configure extraction patterns specific to your business needs. The system adapts to your terminology and data structures."
                    }
                ]
            },
            {
                id: 'integration-security',
                name: "Integration & Security",
                description: "Connecting with existing systems safely",
                faqs: [
                    {
                        question: "Can I integrate with my existing CRM or database?",
                        answer: "Absolutely! WhatsForm provides real-time, bidirectional sync with 200+ business tools including Salesforce, HubSpot, MySQL, PostgreSQL, and custom APIs."
                    },
                    {
                        question: "What about data privacy and security?",
                        answer: "All data is encrypted at rest and in transit. We provide role-based access control, audit trails, and comply with GDPR, HIPAA, and other data protection regulations."
                    }
                ]
            }
        ]
    }
};

const RecordManagementPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={recordManagementPageData.hero.title} 
                subtitle={recordManagementPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {recordManagementPageData.sections.map((section, index) => {
                        switch (section.type) {
                            case 'contentWithImage':
                                return <ContentWithImage key={index} {...section as any} />;
                            case 'pageFeatureGrid':
                                return <PageFeatureGrid key={index} {...section as any} />;
                            default:
                                return null;
                        }
                    })}
                </div>
            </section>
            
            <section className="bg-slate-100 dark:bg-slate-800 py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                    <ContentSection 
                        title={recordManagementPageData.closing.title} 
                        subtitle={recordManagementPageData.closing.subtitle}
                    >
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/evaluation" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    {recordManagementPageData.closing.cta}
                                </a>
                            </Link>
                            <Link href="/book-demo" legacyBehavior>
                                <a className="inline-block bg-white dark:bg-gray-800 text-slate-700 dark:text-slate-200 font-bold py-3 px-8 rounded-lg text-lg hover:bg-slate-100 dark:hover:bg-gray-700 transition-all border border-slate-300 dark:border-slate-600">
                                    Schedule Demo
                                </a>
                            </Link>
                        </div>
                    </ContentSection>
                </div>
            </section>

            <FAQ faqs={recordManagementPageData.faq.categories} />
            <CTA />
        </main>
    );
};

export default RecordManagementPage;

export { getStaticProps } from '../lib/ssr';