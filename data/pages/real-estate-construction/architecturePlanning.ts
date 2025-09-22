import type { CategoryPageData } from '@/components/_CategoryPageLayout';

export const architecturePlanningData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Architecture & Planning",
        subtitle: `Streamline client communication, manage project inquiries, and collect design feedback with a platform built for creative collaboration.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Where Creative Vision Meets Efficient Workflow",
            subtitle: "For architecture and planning firms, translating a client's vision into reality requires impeccable communication. WhatsForm helps you manage the client-facing side of your creative process with structure and ease."
        },
        {
            type: 'contentWithImage',
            subtitle: 'CLIENT DISCOVERY & INQUIRY',
            title: 'Capture the Essence of Every Project',
            text: 'Use a conversational WhatsApp form for new client inquiries. Guide them through a discovery process to understand their aesthetic, functional needs, and budget, ensuring you start every project with a deep understanding of their vision.',
            image: 'https://picsum.photos/seed/arch1/500/400',
            features: [
                "Structured collection of project briefs",
                "Automated qualification of new inquiries",
                "Instantly share your portfolio or design philosophy",
                "Schedule initial design consultations seamlessly"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DESIGN FEEDBACK & REVISIONS',
            title: 'A Visual and Collaborative Feedback Loop',
            text: 'Share design drafts, 3D renders, or material palettes with clients on WhatsApp and collect their feedback through a structured form. This creates a clear, visual record of all decisions and revisions, keeping projects on track.',
            image: 'https://picsum.photos/seed/arch2/500/400',
            reverse: true,
            features: [
                "Share visual assets directly in chat",
                "Structured feedback and approval forms",
                "Clear audit trail of all design decisions",
                "Reduce delays from unstructured email feedback"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: "CheckCircleIcon",
                    title: "Improved Client Collaboration",
                    description: "A simple, visual feedback process leads to clearer communication and outcomes that better match client vision."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Faster Project Timelines",
                    description: "Reduce delays caused by slow or unclear feedback, keeping your creative projects on schedule."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Enhanced Professionalism",
                    description: "A modern, efficient communication process impresses clients and elevates your firm's brand."
                },
                {
                    icon: "CheckCircleIcon",
                    title: "Better Project Documentation",
                    description: "Keep all client feedback and approvals neatly organized and time-stamped for easy reference."
                }
            ]
        }
    ],
    relevantForms: [
        'Design Project',
        'Quotation Request Form',
        'Consultation',
        'Feedback Form',
        'Project Progress'
    ],
    closing: {
        title: "Ready to streamline your design process?",
        subtitle: "Discover how WhatsForm can help you manage your architectural projects with more clarity and efficiency.",
        cta: "Book a Demo"
    }
};

