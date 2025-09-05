
import { CheckCircleIcon } from '../../../../icons';
import type { CategoryPageData } from '../../../../components/_CategoryPageLayout';

export const serviceRepairCenterData: CategoryPageData = {
    hero: {
        title: "WhatsApp Solutions for Service & Repair Centers",
        subtitle: `Streamline service appointment booking, provide automated status updates, and collect customer feedback to build trust and drive repeat business.`,
    },
    sections: [
        {
            type: 'centeredText',
            title: "A Smoother Service Experience",
            subtitle: "For auto service centers, clear communication and a convenient process are key to customer satisfaction and loyalty. WhatsForm helps you automate your service workflow on WhatsApp."
        },
        {
            type: 'contentWithImage',
            subtitle: 'SERVICE BOOKING & REMINDERS',
            title: 'Your 24/7 Virtual Service Advisor',
            text: 'Allow customers to book their car service appointments anytime on WhatsApp. A conversational form can collect vehicle details, the type of service required, and preferred time slots, then confirm the booking automatically.',
            image: 'https://picsum.photos/seed/service1/500/400',
            features: [
                "24/7 conversational service booking",
                "Automated appointment confirmations and reminders",
                "Reduced phone calls and administrative work",
                "Improved workshop scheduling and efficiency"
            ]
        },
        {
            type: 'contentWithImage',
            subtitle: 'STATUS UPDATES & APPROVALS',
            title: 'Keep Your Customers in the Loop',
            text: 'Provide proactive updates on the service status of a customer\'s vehicle. If additional work is required, send a detailed explanation with photos and a quote for approval directly on WhatsApp, ensuring transparency and trust.',
            image: 'https://picsum.photos/seed/service2/500/400',
            reverse: true,
            features: [
                "Automated service progress notifications",
                "In-chat approvals for additional work",
                "Builds transparency and customer trust",
                "Collect post-service feedback automatically"
            ]
        },
        {
            type: 'benefitsGrid',
            title: "Tangible Outcomes for Your Service Center",
            benefits: [
                {
                    icon: CheckCircleIcon,
                    title: "Increased Customer Retention",
                    description: "A convenient, transparent, and professional service experience builds loyalty and encourages repeat business."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Improved Workshop Productivity",
                    description: "A streamlined booking process and clear approvals help your technicians work more efficiently."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Enhanced Upsell Opportunities",
                    description: "Clearly present and get quick approval for additional required services, increasing revenue per vehicle."
                },
                {
                    icon: CheckCircleIcon,
                    title: "Reduced Administrative Load",
                    description: "Automate booking, reminders, and status updates to free up your service advisors to focus on customers."
                }
            ]
        }
    ],
    relevantForms: [
        'Service Appointment',
        'Feedback Form',
        'Quotation Request',
        'Customer Satisfaction'
    ],
    closing: {
        title: "Ready to enhance your auto service experience?",
        subtitle: "Discover how WhatsForm can streamline your operations and improve customer loyalty.",
        cta: "Book a Demo"
    }
};

