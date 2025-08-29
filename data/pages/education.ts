import { CheckCircleIcon } from '../../icons';

export const educationPageData = {
    hero: {
        title: "Transforming Education with Conversational AI on WhatsApp",
        subtitle: "Engage prospective students, automate admissions, and provide instant support to create a seamless, modern educational experience.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Meet Students Where They Are",
            subtitle: "In today's competitive landscape, educational institutions must offer instant, accessible, and personalized communication. WhatsForm turns WhatsApp into a powerful channel for student acquisition and support, powered by intelligent automation."
        },
        {
            type: 'contentWithImage',
            subtitle: 'COURSE INQUIRY & FAQS',
            title: 'Your 24/7 AI-Powered Admissions Counselor',
            text: 'Prospective students have questions at all hours. Our AI agent, trained on your course catalog and admission criteria, fields inquiries instantly. It can provide detailed program information, eligibility requirements, and fee structures, keeping prospects engaged and informed.',
            image: 'https://picsum.photos/seed/education1/500/400',
            features: [
                "Instant, 24/7 responses to course queries",
                "Automated brochure delivery via SmartyAutomate",
                "Seamless handover to human counselors for complex questions",
                "Automatic lead capture in your CRM"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'APPLICATION FORMS & STATUS UPDATES',
            title: 'A Frictionless, Chat-Driven Application Process',
            text: 'Move beyond cumbersome web forms. WhatsForm turns the application process into a simple conversation. Collect data, receive document uploads like transcripts and IDs, and process applications—all within WhatsApp. Applicants can check their status anytime with a simple message.',
            image: 'https://picsum.photos/seed/education2/500/400',
            reverse: true,
            features: [
                "Conversational application forms",
                "In-chat document collection and validation",
                "Real-time application status updates on demand",
                "Integration with your school's ERP or database"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'STUDENT SUPPORT & CAMPUS INFO',
            title: 'An Intelligent Helpdesk for Your Students',
            text: 'For current students, the AI agent acts as a virtual campus guide. It can answer questions about library hours, hostel accommodation, or fee deadlines. For more complex requests, like applying for a leave of absence, it can trigger the appropriate workflow, collect information, and route it for approval.',
            image: 'https://picsum.photos/seed/education3/500/400',
            features: [
                "Instant answers to common campus-related questions",
                "Workflow automation for administrative tasks",
                "Sensitive request detection and escalation to human staff",
                "Reduces the burden on administrative staff"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'ALUMNI & EVENT ENGAGEMENT',
            title: 'Build and Nurture Your Community',
            text: 'Keep your students and alumni connected and engaged. Use WhatsForm to send targeted broadcasts for webinars, alumni meet-ups, and campus events. Collect RSVPs and even process registration fees through interactive forms, ensuring high participation and strong community ties.',
            image: 'https://picsum.photos/seed/education4/500/400',
            reverse: true,
            features: [
                "Segmented broadcasts for targeted communication",
                "Interactive event registration and payment collection",
                "Automated event reminders and follow-ups",
                "Drip campaigns for orientation or fee reminders"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Institution",
            subtitle: "Adopting a conversational AI strategy on WhatsApp delivers measurable results.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Higher Conversions",
                    description: "Increase inquiry-to-enrollment rates by providing instant answers and a frictionless application process."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Admin Load",
                    description: "Automate data entry and routine queries, freeing up your staff to focus on high-value student interactions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Student Experience",
                    description: "Offer modern, responsive support that meets the expectations of today's tech-savvy students."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Competitive Advantage",
                    description: "Position your institution as a tech-forward leader with a unique, AI-driven communication strategy."
                }
            ]
        }
    ],
    useCaseGrid: {
        title: "How can WhatsForm empower your institution?",
        items: [
            "Lead Generation", "Automated Admissions", "Fee Reminders", "Course Counseling", "Document Collection", "Campus Helpdesk",
            "Event Registrations", "Alumni Engagement", "Student Feedback", "Application Tracking", "Onboarding Workflows"
        ]
    },
    closing: {
        title: "Ready to build the future of education communication?",
        subtitle: "Discover how WhatsForm can be customized to meet the unique needs of your institution.",
        cta: "Book a Demo"
    }
};