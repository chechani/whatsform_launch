import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid, FAQ } from '../components/PageBuilder';
import Link from 'next/link';

const documentManagementPageData = {
    hero: {
        title: "Complete Document Management System Inside WhatsApp",
        subtitle: "Store, organize, and manage all your business documents directly within conversations. Never lose track of important files again.",
    },
    sections: [
        {
            type: 'contentWithImage',
            subtitle: 'INTELLIGENT FILE ORGANIZATION',
            title: 'Documents That Organize Themselves',
            text: `Upload, share, and receive documents directly in WhatsApp conversations. Our AI automatically categorizes, tags, and organizes files based on content, conversation context, and business rules.`,
            image: 'https://picsum.photos/seed/document-organization/500/400',
            features: [
                "Automatic categorization by document type and content",
                "Smart tagging based on conversation context",
                "Folder structures that adapt to your business needs",
                "Version control with automatic backup and history"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'SECURE CLOUD STORAGE',
            title: 'Enterprise-Grade File Security',
            text: `All documents are encrypted and stored securely in the cloud with role-based access controls. Share files with confidence knowing your business documents are protected and compliant.`,
            image: 'https://picsum.photos/seed/document-security/500/400',
            reverse: true,
            features: [
                "End-to-end encryption for all file transfers",
                "Role-based permissions and access controls",
                "Compliance with GDPR, HIPAA, and industry standards",
                "Audit trails for all document access and changes"
            ]
        },
        {
            type: 'pageFeatureGrid',
            title: 'Complete Document Management Suite',
            subtitle: 'Everything you need for professional document handling',
            features: [
                {
                    icon: 'DocumentIcon',
                    title: 'Smart Document Processing',
                    description: 'AI-powered document analysis extracts key information and metadata automatically for better organization.'
                },
                {
                    icon: 'MagnifyingGlassIcon',
                    title: 'Powerful Search',
                    description: 'Find any document instantly by name, content, date, or conversation context with advanced search capabilities.'
                },
                {
                    icon: 'ShareIcon',
                    title: 'Secure Sharing',
                    description: 'Share documents with customers and team members with granular permissions and expiration controls.'
                },
                {
                    icon: 'ClockIcon',
                    title: 'Version History',
                    description: 'Track all document versions with complete edit history and ability to restore previous versions.'
                },
                {
                    icon: 'CloudIcon',
                    title: 'Cloud Integration',
                    description: 'Seamlessly sync with Google Drive, Dropbox, OneDrive, and other cloud storage platforms.'
                },
                {
                    icon: 'ShieldCheckIcon',
                    title: 'Compliance Ready',
                    description: 'Built-in compliance features for industries requiring document retention and audit capabilities.'
                }
            ]
        }
    ],
    closing: {
        title: "Transform Your Document Management",
        subtitle: "Organize, secure, and manage all your business documents within WhatsApp conversations",
        cta: "Start Managing Documents"
    },
    faq: {
        title: "Document Management FAQ",
        subtitle: "Common questions about file handling and security",
        categories: [
            {
                id: 'file-handling',
                name: "File Upload & Organization",
                description: "How document management works in WhatsApp",
                faqs: [
                    {
                        question: "What file types are supported?",
                        answer: "WhatsForm supports all major file types including PDFs, Word documents, Excel spreadsheets, images (JPG, PNG, GIF), videos, audio files, and many other formats. Files up to 100MB are supported."
                    },
                    {
                        question: "How does automatic organization work?",
                        answer: "Our AI analyzes document content, file names, and conversation context to automatically categorize and tag files. You can also set custom rules for specific document types or business processes."
                    }
                ]
            },
            {
                id: 'security-compliance',
                name: "Security & Compliance",
                description: "Keeping your documents safe and compliant",
                faqs: [
                    {
                        question: "How secure is document storage?",
                        answer: "All documents are encrypted at rest and in transit using industry-standard encryption. We provide role-based access controls, audit trails, and comply with major security standards including SOC 2 and ISO 27001."
                    },
                    {
                        question: "Can I control who can access documents?",
                        answer: "Yes! You can set granular permissions for each document or folder, including view-only, edit, download, and share permissions. You can also set expiration dates for shared documents."
                    }
                ]
            }
        ]
    }
};

const DocumentManagementPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={documentManagementPageData.hero.title} 
                subtitle={documentManagementPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {documentManagementPageData.sections.map((section, index) => {
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
                        title={documentManagementPageData.closing.title} 
                        subtitle={documentManagementPageData.closing.subtitle}
                    >
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/evaluation" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    {documentManagementPageData.closing.cta}
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

            <FAQ faqs={documentManagementPageData.faq.categories} />
            <CTA />
        </main>
    );
};

export default DocumentManagementPage;

export { getStaticProps } from '../lib/ssr';