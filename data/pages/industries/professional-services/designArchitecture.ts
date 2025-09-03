
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../pages/industries/CategoryPageLayout';

export const designArchitectureData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Design & Architecture",
        subtitle: `Streamline client communication, manage project inquiries, and collect feedback with a platform designed for creative professionals.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Where Creativity Meets Efficiency",
            subtitle: `For design and architecture firms, clear communication and a structured feedback process are essential to bringing a creative vision to life. WhatsForm helps you manage the client-facing side of your projects with ease.`
        },
        {
            type: 'contentWithImage',
            subtitle: 'NEW PROJECT INQUIRIES',
            title: 'Capture Every Creative Opportunity',
            text: 'Use a conversational WhatsApp form as the first point of contact for new clients. Guide them through a series of questions to understand their vision, budget, and timeline, ensuring you have all the key details before the first creative meeting.',
            image: 'https://picsum.photos/seed/design1/500/400',
            features: [
                "Structured collection of project briefs",
                "Automated initial lead qualification",
                "Instantly share your portfolio or past work",
                "Schedule initial consultations seamlessly"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'DESIGN FEEDBACK & APPROVALS',
            title: 'A Streamlined and Visual Feedback Loop',
            text: 'Share design drafts, mood boards, or 3D renders with clients on WhatsApp and collect their feedback through a structured form. Clients can easily comment and approve designs, and all feedback is logged and tracked, creating a clear record of decisions.',
            image: 'https://picsum.photos/seed/design2/500/400',
            reverse: true,
            features: [
                "Share visual assets directly in chat",
                "Structured feedback and approval forms",
                "Clear audit trail of all design decisions",
                "Keep projects moving forward without delays"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Firm",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Improved Client Collaboration",
                    description: "A simple, visual, and structured feedback process leads to clearer communication and better outcomes."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Faster Project Timelines",
                    description: "Reduce delays caused by slow feedback and miscommunication, keeping your creative projects on schedule."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Professionalism",
                    description: "A modern, efficient communication process impresses clients and enhances your firm's professional image."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Better Organization",
                    description: "Keep all client communications, feedback, and approvals neatly organized and accessible."
                }
            ]
        }
    ],
    relevantForms: [
        'Design Project',
        'Quotation Request Form',
        'Illustration Request',
        'Copywriting Request',
        'Presentation Design'
    ],
    closing: {
        title: "Ready to streamline your creative workflow?",
        subtitle: "Discover how WhatsForm can help you manage your design and architecture projects more effectively.",
        cta: "Book a Demo"
    }
};