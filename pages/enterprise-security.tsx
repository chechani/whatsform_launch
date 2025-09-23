import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid, FAQ } from '../components/PageBuilder';
import Link from 'next/link';

const enterpriseSecurityPageData = {
    hero: {
        title: "Enterprise-Grade Security for Business-Critical Operations",
        subtitle: "Comprehensive security, compliance, and audit capabilities that meet the highest enterprise standards for WhatsApp business communications.",
    },
    sections: [
        {
            type: 'contentWithImage',
            subtitle: 'DATA PROTECTION & ENCRYPTION',
            title: 'Military-Grade Security Standards',
            text: `All data is protected with end-to-end encryption, secure cloud storage, and enterprise-grade security protocols. Your business communications and data remain completely secure and private.`,
            image: 'https://picsum.photos/seed/security-encryption/500/400',
            features: [
                "End-to-end encryption for all communications",
                "AES-256 encryption for data at rest",
                "Secure API connections with OAuth 2.0",
                "Regular security audits and penetration testing"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'COMPLIANCE & GOVERNANCE',
            title: 'Meet Any Regulatory Requirement',
            text: `Built-in compliance features for GDPR, HIPAA, SOX, and other regulatory frameworks. Comprehensive audit trails, data retention policies, and governance controls for enterprise peace of mind.`,
            image: 'https://picsum.photos/seed/compliance-governance/500/400',
            reverse: true,
            features: [
                "GDPR, HIPAA, SOX compliance ready",
                "Automated data retention and deletion",
                "Complete audit trails for all activities",
                "Policy enforcement and governance controls"
            ]
        },
        {
            type: 'pageFeatureGrid',
            title: 'Complete Security & Compliance Suite',
            subtitle: 'Enterprise-grade protection for your business communications',
            features: [
                {
                    icon: 'ShieldCheckIcon',
                    title: 'Role-Based Access Control',
                    description: 'Granular permissions system with role-based access controls and multi-factor authentication.'
                },
                {
                    icon: 'DocumentTextIcon',
                    title: 'Comprehensive Audit Trails',
                    description: 'Complete logging of all user activities, data access, and system changes for full accountability.'
                },
                {
                    icon: 'ClockIcon',
                    title: 'Data Retention Policies',
                    description: 'Automated data lifecycle management with configurable retention and deletion policies.'
                },
                {
                    icon: 'GlobeAltIcon',
                    title: 'Global Compliance',
                    description: 'Meet regulatory requirements across different regions and industries with built-in compliance tools.'
                },
                {
                    icon: 'ExclamationTriangleIcon',
                    title: 'Threat Detection',
                    description: 'Advanced threat detection and prevention systems to protect against security breaches.'
                },
                {
                    icon: 'CogIcon',
                    title: 'Security Configuration',
                    description: 'Flexible security settings and policies that can be customized to meet your specific requirements.'
                }
            ]
        }
    ],
    closing: {
        title: "Secure Your Business Communications",
        subtitle: "Enterprise-grade security and compliance for WhatsApp business operations",
        cta: "Learn About Security"
    },
    faq: {
        title: "Enterprise Security FAQ",
        subtitle: "Common questions about security, compliance, and data protection",
        categories: [
            {
                id: 'data-security',
                name: "Data Security",
                description: "How we protect your business data",
                faqs: [
                    {
                        question: "How is my data encrypted and protected?",
                        answer: "All data is encrypted using AES-256 encryption at rest and TLS 1.3 in transit. We implement end-to-end encryption for all communications and use industry-standard security protocols throughout our platform."
                    },
                    {
                        question: "Where is my data stored and who can access it?",
                        answer: "Data is stored in SOC 2 compliant data centers with strict access controls. Only authorized personnel with specific roles can access infrastructure, and all access is logged and monitored."
                    }
                ]
            },
            {
                id: 'compliance',
                name: "Compliance & Regulations",
                description: "Meeting regulatory requirements",
                faqs: [
                    {
                        question: "What compliance certifications do you have?",
                        answer: "WhatsForm is compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001. We regularly undergo third-party security audits and maintain certifications for enterprise customers."
                    },
                    {
                        question: "How do you handle data retention and deletion?",
                        answer: "We provide automated data retention policies that can be configured based on your business requirements and regulatory needs. Data can be automatically deleted after specified periods or retained as needed for compliance."
                    }
                ]
            }
        ]
    }
};

const EnterpriseSecurityPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={enterpriseSecurityPageData.hero.title} 
                subtitle={enterpriseSecurityPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {enterpriseSecurityPageData.sections.map((section, index) => {
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
                        title={enterpriseSecurityPageData.closing.title} 
                        subtitle={enterpriseSecurityPageData.closing.subtitle}
                    >
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/evaluation" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    {enterpriseSecurityPageData.closing.cta}
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

            <FAQ faqs={enterpriseSecurityPageData.faq.categories} />
            <CTA />
        </main>
    );
};

export default EnterpriseSecurityPage;

export { getStaticProps } from '../lib/ssr';