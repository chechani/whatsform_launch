import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const softwareDevelopmentData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Software Development Agencies",
        subtitle: `Streamline client communication, manage project inquiries, and provide structured support with a professional WhatsApp workflow.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Code, Collaborate, Communicate",
            subtitle: "For software development agencies, clear client communication is just as important as clean code. WhatsForm helps you manage the client-facing side of your projects with the same efficiency you apply to your development."
        },
        {
            type: 'contentWithImage',
            subtitle: 'NEW PROJECT INQUIRIES',
            title: 'Capture and Qualify Leads Effectively',
            text: 'Use a conversational WhatsApp form to handle new project inquiries. An AI bot can gather initial requirements, understand the project scope and budget, and collect contact details, ensuring your sales team receives well-qualified, actionable leads.',
            image: 'https://picsum.photos/seed/softdev1/500/400',
            features: [
                "24/7 automated lead qualification",
                "Structured collection of project requirements",
                "Instantly share your portfolio and case studies",
                "Seamlessly schedule discovery calls"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT COMMUNICATION & SUPPORT',
            title: 'A Centralized Hub for Every Project',
            text: 'Create a dedicated communication channel for each project. Use WhatsApp for sprint updates, bug reporting, and change requests. A structured form for bug reports ensures your developers get all the necessary information to act quickly.',
            image: 'https://picsum.photos/seed/softdev2/500/400',
            reverse: true,
            features: [
                "Centralized communication for project updates",
                "Structured bug reporting forms",
                "Manage change requests and approvals",
                "Maintain a clear, auditable project history"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Agency",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Client Satisfaction",
                    description: "A professional, responsive, and transparent communication process builds strong client trust and leads to long-term partnerships."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Increased Developer Productivity",
                    description: "Structured bug reports and clear communication reduce back-and-forth, allowing your developers to focus on coding."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Project Delivery",
                    description: "Efficient communication and clear feedback loops help keep your projects on schedule and on budget."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "More Qualified Leads",
                    description: "Automated lead qualification ensures your sales team spends their time on the most promising opportunities."
                }
            ]
        }
    ],
    relevantForms: [
        'Client Onboarding',
        'Support Ticket',
        'Project Progress',
        'Quotation Request Form',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to streamline your development agency's operations?",
        subtitle: "Discover how WhatsForm can improve your client communication and project workflows.",
        cta: "Book a Demo"
    }
};

