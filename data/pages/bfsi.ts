
export const bfsiPageData = {
    hero: {
        title: "Smart, Secure, and Seamless Customer Service for BFSI",
        subtitle: "Automate routine queries, streamline applications, and process claims with compliant, AI-powered conversations on WhatsApp.",
    },
    subCategories: [
        {
            id: 'banking',
            slug: 'banking',
            title: 'Banking',
            description: '24/7 personal banking assistant for inquiries and service requests.'
        },
        {
            id: 'insurance',
            slug: 'insurance',
            title: 'Insurance',
            description: 'Interactive application process from inquiry to pre-approval.'
        },
        {
            id: 'investment-wealth-management',
            slug: 'investment-wealth-management',
            title: 'Investment & Wealth Management',
            description: 'Secure and instant client portfolio updates and communication.'
        },
        {
            id: 'accounting-auditing',
            slug: 'accounting-auditing',
            title: 'Accounting & Auditing',
            description: 'Streamline client communication and data collection.'
        },
        {
            id: 'fintech',
            slug: 'fintech',
            title: 'FinTech',
            description: 'Enhance user onboarding and support for your financial products.'
        }
    ],
    sections: [
        {
            type: 'centeredText',
            title: "The Future of Financial Conversations",
            subtitle: `The BFSI sector demands security, compliance, and convenience. WhatsForm delivers on all fronts, turning complex financial processes into simple, secure, and user-friendly WhatsApp interactions.`
        },
        {
            id: 'banking',
            type: 'contentWithImage',
            subtitle: 'BANKING FAQS & TRANSACTIONS',
            title: 'Your Customers\' Personal Banking Assistant',
            text: 'Empower customers with a 24/7 AI agent that can handle queries like balance inquiries, transaction history, and password resets after proper OTP authentication. It can also guide them through service requests like ordering a chequebook, all within a secure chat.',
            image: 'https://picsum.photos/seed/bfsi1/500/400',
            features: [
                "Secure, OTP-authenticated access to account info",
                "Instant answers to common banking FAQs",
                "Automated handling of routine service requests",
                "Reduced wait times and IVR frustration"
            ]
        },
        {
            id: 'insurance',
            type: 'contentWithImage',
            subtitle: 'LOAN & INSURANCE APPLICATIONS',
            title: 'From Inquiry to Pre-Approval in Minutes',
            text: 'Transform lengthy application forms into an interactive conversation. The AI agent can gather applicant details, integrate with APIs for real-time credit score checks, and even provide instant pre-approval, significantly speeding up the process and improving completion rates.',
            image: 'https://picsum.photos/seed/bfsi2/500/400',
            reverse: true,
            features: [
                "Conversational data collection for applications",
                "Real-time eligibility checks with API integration",
                "Instant pre-approval to keep leads engaged",
                "Seamless handoff to agents for final verification"
            ]
        },
        {
            id: 'claims-and-service',
            type: 'contentWithImage',
            subtitle: 'CLAIMS & SERVICE REQUESTS',
            title: 'Fast, Empathetic Support When It Matters',
            text: 'Expedite insurance claims by allowing customers to file their first notice of loss via WhatsApp. The AI can collect incident details, request photos of damage, and provide a claim ID instantly. This reduces anxiety for the customer and streamlines the process for the insurer.',
            image: 'https://picsum.photos/seed/bfsi3/500/400',
            features: [
                "Guided, conversational claims filing process",
                "In-chat collection of photos and documents",
                "Instant acknowledgement with a claim reference ID",
                "Faster and more efficient claims processing"
            ]
        },
        {
            id: 'compliance-and-security',
            type: 'contentWithImage',
            subtitle: 'REGULATORY COMPLIANCE & SECURITY',
            title: 'Built for Trust and Accountability',
            text: 'Our platform is designed with the BFSI sector\'s needs in mind. All interactions are logged for a complete audit trail. We support two-factor authentication, data masking, and encrypted storage to ensure you meet stringent data protection and compliance standards.',
            image: 'https://picsum.photos/seed/bfsi4/500/400',
            reverse: true,
            features: [
                "Comprehensive audit trail of all conversations",
                "Integration with two-factor authentication (2FA)",
                "Built-in security awareness messages for customers",
                "Secure handling of sensitive personal data"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Institution",
            subtitle: "Adopting an AI-driven WhatsApp strategy delivers significant improvements in efficiency and customer satisfaction.",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Customer Experience",
                    description: "Provide instant, 24/7, and convenient service, eliminating call queues and branch visits for routine tasks."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Massive Cost Savings",
                    description: "Dramatically reduce call center volumes by automating the vast majority of common queries and requests."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Lead Conversion",
                    description: "Make loan and policy applications frictionless and interactive, leading to higher completion and conversion rates."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Compliance",
                    description: "Maintain meticulous records of all customer interactions to simplify audits and meet regulatory requirements."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to redefine your customer interactions?",
        subtitle: "Discover how WhatsForm can provide the secure, efficient, and modern experience your financial customers expect.",
        cta: "Request a Secure Demo"
    }
};