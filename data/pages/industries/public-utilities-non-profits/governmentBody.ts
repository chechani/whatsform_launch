
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const governmentBodyData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Government Bodies",
        subtitle: `Deliver modern, accessible e-governance. Manage citizen services, handle grievances, and disseminate public information on WhatsApp.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "Citizen Services, Simplified",
            subtitle: "Overcome the traditional barriers of public service delivery. WhatsForm turns complex paperwork and long queues into simple, accessible WhatsApp conversations, aligning with 'Digital India' initiatives."
        },
        {
            type: 'contentWithImage',
            subtitle: 'DIGITAL SERVICE DELIVERY',
            title: 'Applications and Services in a Simple Chat',
            text: 'Convert complex government forms for licenses, welfare schemes, or civic services into guided WhatsApp conversations. Citizens can apply step-by-step and upload documents by taking a photo, all in their local language.',
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
            subtitle: 'GRIEVANCE REPORTING & TRACKING',
            title: 'Empowering Citizens, Ensuring Accountability',
            text: 'Allow citizens to report civic issues like potholes or power outages. They can describe the issue, share their location, and attach photos. A ticket is logged automatically, and they can track its status, promoting transparency and trust.',
            image: 'https://picsum.photos/seed/gov2/500/400',
            reverse: true,
            features: [
                "Easy grievance logging with location and photo sharing",
                "Automated ticket generation and acknowledgement",
                "On-demand status tracking for citizens",
                "Audit trail for enhanced accountability"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Governance",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Accessibility",
                    description: "Lower the barrier for citizens to access services, especially for those less comfortable with web portals."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Efficiency",
                    description: "Automate clerical work and routine queries, allowing officials to focus on core responsibilities."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Transparency",
                    description: "Provide citizens with real-time status updates and maintain clear audit logs for all interactions."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Higher Trust in Services",
                    description: "A responsive, convenient, and transparent system builds public trust in government services."
                }
            ]
        }
    ],
    relevantForms: [
        'Grievance',
        'Application',
        'Declaration Form',
        'Regulatory Filing',
        'Feedback Form'
    ],
    closing: {
        title: "Ready to build a more responsive and citizen-centric government?",
        subtitle: "Discover how WhatsForm can power your e-Governance initiatives.",
        cta: "Book a Consultation"
    }
};

