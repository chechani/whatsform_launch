import React from 'react';
import { GenericPageHero, CTA, ContentSection, ContentWithImage, PageFeatureGrid, FAQ } from '../components/PageBuilder';
import Link from 'next/link';

const processAutomationPageData = {
    hero: {
        title: "No-Code Workflow Builder for Complex Business Processes",
        subtitle: "Design, deploy, and scale sophisticated business automation without technical expertise. Transform manual processes into intelligent workflows.",
    },
    sections: [
        {
            type: 'contentWithImage',
            subtitle: 'VISUAL WORKFLOW BUILDER',
            title: 'Build Complex Processes Visually',
            text: `Design multi-step business processes using our intuitive drag-and-drop interface. Create conditional logic, automated triggers, and complex decision trees without writing a single line of code.`,
            image: 'https://picsum.photos/seed/workflow-builder/500/400',
            features: [
                "Drag-and-drop workflow design interface",
                "Pre-built templates for common business processes",
                "Conditional logic and decision branching",
                "Real-time testing and validation tools"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'INTELLIGENT AUTOMATION',
            title: 'AI-Powered Process Intelligence',
            text: `Our AI learns from your business patterns to optimize workflows automatically. Smart routing, predictive actions, and adaptive processes that improve over time.`,
            image: 'https://picsum.photos/seed/process-intelligence/500/400',
            reverse: true,
            features: [
                "Machine learning optimization of process flows",
                "Predictive routing based on conversation context",
                "Automated exception handling and escalation",
                "Performance analytics and improvement suggestions"
            ]
        },
        {
            type: 'pageFeatureGrid',
            title: 'Complete Process Automation Platform',
            subtitle: 'Everything you need to automate your business operations',
            features: [
                {
                    icon: 'CogIcon',
                    title: 'Multi-Step Workflows',
                    description: 'Create complex, multi-departmental processes that span across your entire business ecosystem.'
                },
                {
                    icon: 'ClockIcon',
                    title: 'Time-Based Triggers',
                    description: 'Set up scheduled actions, delays, and time-sensitive workflows that execute automatically.'
                },
                {
                    icon: 'ArrowsRightLeftIcon',
                    title: 'System Integrations',
                    description: 'Connect with 200+ business tools to create seamless, cross-platform automation workflows.'
                },
                {
                    icon: 'ChartBarIcon',
                    title: 'Process Analytics',
                    description: 'Track workflow performance, identify bottlenecks, and optimize processes with detailed analytics.'
                },
                {
                    icon: 'UserGroupIcon',
                    title: 'Team Collaboration',
                    description: 'Assign tasks, set approvals, and coordinate team actions within automated workflows.'
                },
                {
                    icon: 'ShieldCheckIcon',
                    title: 'Compliance Controls',
                    description: 'Built-in audit trails, approval processes, and compliance features for regulated industries.'
                }
            ]
        }
    ],
    closing: {
        title: "Automate Your Business Processes Today",
        subtitle: "Transform manual operations into intelligent, automated workflows that scale with your business",
        cta: "Start Automating"
    },
    faq: {
        title: "Process Automation FAQ",
        subtitle: "Common questions about workflow automation and implementation",
        categories: [
            {
                id: 'getting-started',
                name: "Getting Started",
                description: "How to begin with process automation",
                faqs: [
                    {
                        question: "Do I need technical skills to create workflows?",
                        answer: "No! Our visual workflow builder is designed for business users. You can create complex processes using drag-and-drop components, pre-built templates, and simple configuration options."
                    },
                    {
                        question: "How quickly can I deploy a new workflow?",
                        answer: "Simple workflows can be deployed in minutes using our templates. More complex, multi-step processes typically take a few hours to design and test before going live."
                    }
                ]
            },
            {
                id: 'advanced-features',
                name: "Advanced Features",
                description: "Sophisticated automation capabilities",
                faqs: [
                    {
                        question: "Can workflows integrate with my existing systems?",
                        answer: "Yes! WhatsForm connects with 200+ business tools including CRMs, ERPs, databases, and custom APIs. You can trigger actions across multiple systems from a single workflow."
                    },
                    {
                        question: "How do I handle errors and exceptions in workflows?",
                        answer: "Our platform includes intelligent error handling with automatic retry logic, exception routing, and escalation procedures. You can define custom error handling for each step in your workflow."
                    }
                ]
            }
        ]
    }
};

const ProcessAutomationPage: React.FC = () => {
    return (
        <main>
            <GenericPageHero 
                title={processAutomationPageData.hero.title} 
                subtitle={processAutomationPageData.hero.subtitle}
            />
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
                    {processAutomationPageData.sections.map((section, index) => {
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
                        title={processAutomationPageData.closing.title} 
                        subtitle={processAutomationPageData.closing.subtitle}
                    >
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/evaluation" legacyBehavior>
                                <a className="inline-block bg-green-500 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-green-600 transition-transform hover:scale-105 shadow-lg">
                                    {processAutomationPageData.closing.cta}
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

            <FAQ faqs={processAutomationPageData.faq.categories} />
            <CTA />
        </main>
    );
};

export default ProcessAutomationPage;

export { getStaticProps } from '../lib/ssr';