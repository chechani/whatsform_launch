import { CheckCircleIcon } from '../../icons';

export const governmentPageData = {
    hero: {
        title: "Modernizing Public Services with WhatsApp Automation",
        subtitle: "Bring e-Governance to every citizen's smartphone. Deliver services, handle grievances, and disseminate information instantly and inclusively.",
    },
    sections: [
        {
            type: 'centeredText',
            title: "Citizen Services, Simplified",
            subtitle: "Align with 'Digital India' initiatives by overcoming the traditional barriers of public service delivery. WhatsForm turns complex paperwork and long queues into simple, accessible WhatsApp conversations."
        },
        {
            type: 'contentWithImage',
            subtitle: 'DIGITAL SERVICE DELIVERY',
            title: 'Applications and Services in a Simple Chat',
            text: 'Convert complex government forms for licenses, welfare schemes, or civic services into guided WhatsApp conversations. Citizens can apply step-by-step, upload documents by taking a photo, and receive an application number instantly—all in their local language.',
            image: 'https://picsum.photos/seed/gov1/500/400',
            features: [
                "Conversational forms for easy application",
                "In-chat document uploads",
                "Multilingual AI agent support",
                "Real-time data integration with government systems"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'MULTILINGUAL FAQ & HELPLINE',
            title: '24/7 Information, Reduced Workload',
            text: 'Deploy an AI-powered agent to answer frequently asked questions about processes, deadlines, and forms, 24/7. The AI can respond in multiple local languages, deflecting a huge volume of repetitive queries and freeing up officials to handle complex cases.',
            image: 'https://picsum.photos/seed/gov2/500/400',
            reverse: true,
            features: [
                "Instant answers from an official FAQ repository",
                "Automatic language detection and response",
                "Intelligent escalation to human officers",
                "Drastically reduced call center volume"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'GRIEVANCE REPORTING & TRACKING',
            title: 'Empowering Citizens, Ensuring Accountability',
            text: 'Allow citizens to report civic issues like potholes or power outages conveniently via WhatsApp. They can describe the issue, share their location, and attach photos. A ticket is logged automatically, and they can track its status with a simple message, promoting transparency and trust.',
            image: 'https://picsum.photos/seed/gov3/500/400',
            features: [
                "Easy grievance logging with location and photo sharing",
                "Automated ticket generation and acknowledgement",
                "On-demand status tracking for citizens",
                "Audit trail for enhanced accountability"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'PUBLIC HEALTH & OUTREACH',
            title: 'Proactive Campaigns that Reach Everyone',
            text: 'Use WhatsForm for large-scale outreach campaigns like vaccination drives, census data collection, or public health announcements. Segment your audience and send interactive messages that allow citizens to book slots or provide information directly in the chat.',
            image: 'https://picsum.photos/seed/gov4/500/400',
            reverse: true,
            features: [
                "Segmented broadcasts for targeted outreach",
                "Interactive forms for surveys and bookings",
                "Cost-effective and instant communication",
                "Higher citizen participation rates"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Governance",
            subtitle: "Implementing a WhatsApp-based strategy delivers inclusive, efficient, and transparent public services.",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Accessibility",
                    description: "Lower the barrier for citizens to access services and schemes, especially for those less comfortable with web portals."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Efficiency",
                    description: "Automate clerical work, data entry, and routine queries, allowing officials to focus on core responsibilities."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Transparency",
                    description: "Provide citizens with real-time status updates and maintain clear audit logs for all interactions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Trust",
                    description: "A responsive, convenient, and transparent system builds public trust in government services."
                }
            ]
        }
    ],
    closing: {
        title: "Ready to build a more responsive and citizen-centric government?",
        subtitle: "Discover how WhatsForm can power your e-Governance initiatives.",
        cta: "Book a Consultation"
    }
};